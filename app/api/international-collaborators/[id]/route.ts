import InternationalCollaborator from "@/app/models/InternationalCollaborator";
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
      (await InternationalCollaborator.deleteOne({ _id: id })).deletedCount ===
      0
    ) {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 404,
      message: "International collaborator not found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "International collaborator deleted successfully",
  });
}
