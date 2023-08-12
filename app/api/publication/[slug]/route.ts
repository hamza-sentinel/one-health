import Publication from "@/app/models/Publication";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  await connectToMongoDB();
  try {
    if ((await Publication.deleteOne({ slug })).deletedCount === 0) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Publication not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Publication deleted successfully",
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
      (await Publication.findOneAndUpdate({ slug }, { $set: body })) === null
    ) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Publication not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Publication updated successfully",
    success: true,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  await connectToMongoDB();
  let publication = await Publication.findOne({ slug });
  if (!publication) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Publication not found",
    });
  }
  return NextResponse.json(publication);
}
