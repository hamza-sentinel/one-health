import InternationalCollaborator from "@/app/models/InternationalCollaborator";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const internationalCollaborator = await InternationalCollaborator.find();
  return NextResponse.json(internationalCollaborator);
}
