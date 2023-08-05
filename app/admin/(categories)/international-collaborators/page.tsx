import Link from "next/link";
import Header from "@/app/admin/components/Header";
import AddCollaborator from "@/app/admin/components/AddCollaborator";
import Collaborator from "@/app/components/Collaborator/Collaborator";

async function getInternationalCollaborators() {
  const response = await fetch(
    process.env.URL + "/api/international-collaborators",
    {
      cache: "no-cache",
    }
  );
  const collaborators = await response.json();
  return collaborators;
}

async function InternationCollaborators() {
  const collaborators = await getInternationalCollaborators();
  console.log(collaborators);
  return (
    <>
      <Header />
      <section className="container">
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="text-3xl font-bold py-4">
            International Collaborators
          </h1>
          <AddCollaborator />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {collaborators.map((collaborator: any, index: number) => (
            <Collaborator collaborator={collaborator} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default InternationCollaborators;
