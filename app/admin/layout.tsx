import { Inter } from "@next/font/google";
import ClientProvider from "@/app/context/client-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Admin",
  description: "Admin",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/api/auth/signin");
  }
  // return <ClientProvider session={session}>{children}</ClientProvider>;
  return <main>{children}</main>;
}
