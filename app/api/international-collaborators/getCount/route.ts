import InternationalCollaborator from "@/app/models/InternationalCollaborator";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await InternationalCollaborator.countDocuments();
  return NextResponse.json({ count });
}
