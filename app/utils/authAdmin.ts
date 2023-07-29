import Admin from "@/app/models/admin";
import connectToMongoDB from "./mongodb";
import { compare } from "bcrypt";

export default async function authenticate(username: string, password: string) {
  await connectToMongoDB();

  const admins = await Admin.find();
  const {
    username: adminUsername,
    password: adminPassword,
  }: { username?: string | undefined; password?: string | undefined } =
    admins[0];

  if (username !== adminUsername) return undefined;

  const isPasswordValid = await compare(password, adminPassword!);
  if (!isPasswordValid) return undefined;

  return {
    user: {
      name: username,
      _id: admins[0]._id,
    },
    token: "",
  };
}
