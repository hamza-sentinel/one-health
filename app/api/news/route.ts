import News from "@/app/models/LatestNews";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const news = await News.find();
  return NextResponse.json(news);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // validate body
  if (!body.text || !body.image) {
    return NextResponse.json({
      error: true,
      status: 400,
      message: "Invalid News body",
    });
  }

  try {
    await connectToMongoDB();
    const news = await News.create(body);
    news.save();

    return NextResponse.json({
      status: 201,
      message: "News added successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: true, status: 400, message: error });
  }
}
