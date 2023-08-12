import Admin from "@/app/models/admin";
import connectToMongoDB from "@/app/utils/mongodb";
import { compare, hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectToMongoDB();
  const admins = await Admin.find();

  const username = "admin";
  const password = "password";

  if (admins.length !== 0)
    return NextResponse.json({ message: "Admin already", error: true });

  const hashedPassword = await hash(password, 10);

  await Admin.create({ username, password: hashedPassword });

  return NextResponse.json({
    message: "Admin created successfully",
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
