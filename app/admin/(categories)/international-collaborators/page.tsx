import Link from "next/link";
import Header from "@/app/admin/components/Header";
import CollaboratorsContent from "./CollaboratorsContent";

async function InternationCollaborators() {
  return (
    <>
      <Header />
      <section className="container">
        <CollaboratorsContent url={process.env.URL!} />
      </section>
    </>
  );
}

export default InternationCollaborators;
