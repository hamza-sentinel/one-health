import Forthcoming from "@/app/models/Forthcoming";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await Forthcoming.countDocuments();
  return NextResponse.json({ count });
}
