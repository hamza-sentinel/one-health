import News from "@/app/models/LatestNews";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await News.countDocuments();
  return NextResponse.json({ count });
}
