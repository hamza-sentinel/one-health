import Publication from "@/app/models/Publication";
import connectToMongoDB from "@/app/utils/mongodb";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToMongoDB();
    const publications = await Publication.find(
      {},
      {
        content: 0,
      }
    );
    if (!true) return NextResponse.json(publications);
    else {
      return NextResponse.json(publications);
    }
  } catch (error) {
    return NextResponse.json({ error });
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
    const publication = await Publication.create({
      title,
      content,
      image,
      slug,
    });
    publication.save();

    return NextResponse.json({
      status: 201,
      message: "Publication created successfully",
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
