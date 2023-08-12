import Information from "@/app/models/Information";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  await connectToMongoDB();
  try {
    if ((await Information.deleteOne({ _id: id })).deletedCount === 0) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Information not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Information deleted successfully",
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // id is valid ObjectId
  if (!id.match(/^[0-9a-fA-F]{24}$/))
    return NextResponse.json({
      error: true,
      status: 400,
      message: "Invalid Information id",
    });

  const body = await request.json();

  await connectToMongoDB();
  try {
    if (
      (await Information.findOneAndUpdate({ _id: id }, { $set: body })) === null
    ) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "Information not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Information updated successfully",
  });
}
