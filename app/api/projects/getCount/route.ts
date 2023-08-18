import Project from "@/app/models/Project";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await Project.countDocuments();
  return NextResponse.json({ count });
}
