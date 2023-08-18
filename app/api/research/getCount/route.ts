import Research from "@/app/models/Research";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await Research.countDocuments();
  return NextResponse.json({ count });
}
