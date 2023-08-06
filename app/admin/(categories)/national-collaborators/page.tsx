import Header from "@/app/admin/components/Header";
import CollaboratorsContent from "./CollaboratorsContent";

async function NationalCollaborators() {
  return (
    <>
      <Header />
      <section className="container">
        <CollaboratorsContent url={process.env.URL!} />
      </section>
    </>
  );
}

export default NationalCollaborators;
