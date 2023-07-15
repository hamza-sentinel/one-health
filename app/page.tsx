import Links from "./components/Links/Links";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ShowCase from "./components/showcase/ShowCase";

export default function Home() {
  return (
    <main>
      <ShowCase />
      <Links />
      <About />
    </main>
  );
}
