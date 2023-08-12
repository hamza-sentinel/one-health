import ExtensionArticle from "@/app/models/ExtensionArticle";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  console.log(slug);
  await connectToMongoDB();
  try {
    if ((await ExtensionArticle.deleteOne({ slug })).deletedCount === 0) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Article not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Article deleted successfully",
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const body = await request.json();

  await connectToMongoDB();
  try {
    if (
      (await ExtensionArticle.findOneAndUpdate({ slug }, { $set: body })) ===
      null
    ) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Article not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Article updated successfully",
    success: true,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  await connectToMongoDB();
  let article = await ExtensionArticle.findOne({ slug });
  if (!article) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Article not found",
    });
  }
  return NextResponse.json(article);
}
