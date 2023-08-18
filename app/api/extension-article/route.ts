import ExtensionArticle from "@/app/models/ExtensionArticle";
import connectToMongoDB from "@/app/utils/mongodb";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToMongoDB();
    const articles = await ExtensionArticle.find(
      {},
      {
        content: 0,
      }
    );
    return NextResponse.json(articles);
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
    const extensionArticle = await ExtensionArticle.create({
      title,
      content,
      image,
      slug,
    });
    extensionArticle.save();

    return NextResponse.json({
      status: 201,
      message: "Article created successfully",
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
