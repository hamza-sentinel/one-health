import Research from "@/app/models/Research";
import connectToMongoDB from "@/app/utils/mongodb";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();

  const queries = request.url
    .split("?")
    .slice(1)
    .join("")
    .split("&")
    .map((query) => {
      const [key, value] = query.split("=");
      return { [key]: parseInt(value) };
    });

  const page = queries.find((query) => query.page)?.page || 0;
  const limit = 5;

  try {
    const research = await Research.find(
      {},
      {
        content: 0,
      }
    )
      .skip(page * limit)
      .limit(limit);
    return NextResponse.json(research);
  } catch (error) {
    return NextResponse.json({ error: true, message: error });
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const title = formData.get("title");
  const content = formData.get("content");
  const image = formData.get("image");
  const slug = formData.get("slug");
  //   const file = formData.get("file") as File;

  //   const bytes = await file?.arrayBuffer();
  //   const buffer = Buffer.from(bytes);

  //   // With the file data in the buffer, you can do whatever you want with it.
  //   // For this, we'll just write it to the filesystem in a new location
  //   const path = `./tmp/${file.name}`;
  //   try {
  //     await writeFile(path, buffer);
  //     console.log(`open ${path} to see the uploaded file`);
  //   } catch (error) {
  //     console.error(error);
  //   }

  if (!title || !content || !image || !slug) {
    return NextResponse.json({
      status: 400,
      error: "Missing required fields",
    });
  }

  try {
    await connectToMongoDB();
    const research = await Research.create({
      title,
      content,
      image,
      slug,
    });
    research.save();

    return NextResponse.json({
      status: 201,
      message: "Research added successfully",
      success: true,
    });
  } catch (error) {
    // @ts-ignore
    if (error.code === 11000) {
      return NextResponse.json({
        status: 400,
        error: "slug already exists, please use another slug",
      });
    }
    return NextResponse.json({ error: true, message: error });
  }
}
