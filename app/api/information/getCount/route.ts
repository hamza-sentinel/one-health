import Information from "@/app/models/Information";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await Information.countDocuments();
  return NextResponse.json({ count });
}
