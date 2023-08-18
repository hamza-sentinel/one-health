import Research from "@/app/models/Research";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  await connectToMongoDB();
  try {
    if ((await Research.deleteOne({ slug })).deletedCount === 0) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Research not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Research deleted successfully",
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
    if ((await Research.findOneAndUpdate({ slug }, { $set: body })) === null) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Research not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Research updated successfully",
    success: true,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  await connectToMongoDB();
  let research = await Research.findOne({ slug });
  if (!research) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Research not found",
    });
  }
  return NextResponse.json(research);
}
