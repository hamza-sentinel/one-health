import Publication from "@/app/models/Publication";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await Publication.countDocuments();
  return NextResponse.json({ count });
}
