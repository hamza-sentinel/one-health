import Admin from "@/app/models/admin";
import connectToMongoDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { hash, compare } from "bcrypt";

export async function POST(request: NextRequest) {
  const { username, password }: { username: string; password: string } =
    await request.json();
  await connectToMongoDB();

  const admins = await Admin.find();
  const {
    username: adminUsername,
    password: adminPassword,
  }: { username?: string | undefined; password?: string | undefined } =
    admins[0];

  if (username !== adminUsername)
    return NextResponse.json({
      message: "Invalid credentials",
      verified: false,
    });

  const isPasswordValid = await compare(password, adminPassword!);
  if (!isPasswordValid)
    return NextResponse.json({
      message: "Invalid credentials",
      verified: false,
    });

  return NextResponse.json({ message: "Verified", verified: true });
}
