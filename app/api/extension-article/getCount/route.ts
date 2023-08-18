import ExtensionArticle from "@/app/models/ExtensionArticle";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const count = await ExtensionArticle.countDocuments();
  return NextResponse.json({ count });
}
