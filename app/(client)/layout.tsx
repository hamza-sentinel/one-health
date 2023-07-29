import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export const metadata = {
  title: "Molecular Parasitolgy & One Health Lab",
  description: "Molecular Parasitolgy & One Health Lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
