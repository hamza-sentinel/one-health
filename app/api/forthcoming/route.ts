import ForthComing from "@/app/models/Forthcoming";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToMongoDB();
    const forthComing = await ForthComing.find();
    return NextResponse.json(forthComing);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // validate body
  if (!body.text || !body.image) {
    return NextResponse.json({
      error: true,
      status: 400,
      message: "Invalid Forthcoming body",
    });
  }

  try {
    await connectToMongoDB();
    const forthComing = await ForthComing.create(body);
    forthComing.save();

    return NextResponse.json({
      status: 201,
      message: "Forthcoming added successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: true, status: 400, message: error });
  }
}
