import Admin from "@/app/models/admin";
import connectToMongoDB from "@/app/utils/mongodb";
import { compare, hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const {
    currentPassword,
    newPassword,
  }: { currentPassword: string; newPassword: string } = await request.json();

  await connectToMongoDB();
  const admins = await Admin.find();

  if (admins.length === 0)
    return NextResponse.json({ message: "Admin not found", error: true });

  const admin = admins[0];
  const isPasswordValid = await compare(currentPassword, admin.password!);

  if (!isPasswordValid)
    return NextResponse.json({
      message: "Invalid credentials",
      error: true,
    });

  if (newPassword.length < 8)
    return NextResponse.json({
      message: "Password must be at least 8 characters long",
      error: true,
    });

  const hashedPassword = await hash(newPassword, 10);

  await Admin.findOneAndUpdate(
    { _id: admins[0]._id },
    { password: hashedPassword }
  );

  return NextResponse.json({
    message: "Admin updated successfully",
    error: false,
  });

  //   const hashedPassword = hash(newPassword, 10);
  //   await Admin.findOneAndUpdate(
  //     { _id: admins[0]._id },
  //     { password: hashedPassword }
  //   );

  //   return NextResponse.json({
  //     message: "Admin updated successfully",
  //     error: false,
  //   });
}
