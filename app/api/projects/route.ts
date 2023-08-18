import Project from "@/app/models/Project";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToMongoDB();
    const project = await Project.find();
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    await connectToMongoDB();
    const project = await Project.create(body);
    project.save();

    return NextResponse.json({
      status: 201,
      message: "Project created successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: true, status: 400, message: error });
  }
}
