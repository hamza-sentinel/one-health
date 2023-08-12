import Information from "@/app/models/Information";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const information = await Information.find();
  return NextResponse.json(information);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // validate body
  if (!body.text || !body.image) {
    return NextResponse.json({
      error: true,
      status: 400,
      message: "Invalid Information body",
    });
  }

  try {
    await connectToMongoDB();
    const information = await Information.create(body);
    information.save();

    return NextResponse.json({
      status: 201,
      message: "Information added successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: true, status: 400, message: error });
  }
}
