import NationalCollaborator from "@/app/models/NationalCollaborator";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await NationalCollaborator.countDocuments();
  return NextResponse.json({ count });
}
