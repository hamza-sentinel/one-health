import NationalCollaborator from "@/app/models/NationalCollaborator";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  await connectToMongoDB();
  try {
    if (
      (await NationalCollaborator.deleteOne({ _id: id })).deletedCount === 0
    ) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "National collaborator not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "National collaborator deleted successfully",
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
      message: "Invalid National collaborator id",
    });

  const body = await request.json();

  await connectToMongoDB();
  try {
    console.log();
    if (
      (await NationalCollaborator.findOneAndUpdate(
        { _id: id },
        { $set: body }
      )) === null
    ) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "National collaborator not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "National collaborator updated successfully",
  });
}
