import Links from "./components/Links/Links";
import CEOSaying from "./components/ceo-saying/CEOSaying";
import Header from "./components/header/Header";
import ShowCase from "./components/showcase/ShowCase";

export default function Home() {
  return (
    <main>
      <Header />
      <ShowCase />
      <Links />
      <CEOSaying />
    </main>
  );
}
