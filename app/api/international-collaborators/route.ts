import InternationalCollaborator from "@/app/models/InternationalCollaborator";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToMongoDB();
    const internationalCollaborator = await InternationalCollaborator.find();
    return NextResponse.json(internationalCollaborator);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, university, telephone, email, image } = body;

  if (!name || !university || !telephone || !email || !image) {
    return NextResponse.json({
      status: 400,
      error: "Missing required fields",
    });
  }

  try {
    await connectToMongoDB();
    const internationalCollaborator = await InternationalCollaborator.create(
      body
    );
    internationalCollaborator.save();

    return NextResponse.json({
      status: 201,
      message: "International collaborator created successfully",
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
