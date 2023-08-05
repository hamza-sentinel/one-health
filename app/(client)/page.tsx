import { getServerSession } from "next-auth";
import Links from "../components/Links";
import About from "../components/about";
import ShowCase from "../components/showcase/ShowCase";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("/admin");
  }
  return (
    <main>
      <ShowCase />
      <Links />
      <About />
    </main>
  );
}
