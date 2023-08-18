import Collaborator from "@/app/components/Collaborator";
import { getData } from "@/app/utils";
import Image from "next/image";
import { Key } from "react";
import { FaSpinner } from "react-icons/fa";

async function getCollaborators() {
  const data = await getData(
    process.env.URL + "/api/international-collaborators"
  );
  return data;
}

async function InternationCollaborators() {
  const collaborators = await getCollaborators();
  return (
    <section>
      <div className="container">
        <h1 className="text-4xl text-gray-900 font-bold mt-2">
          International Collaborators
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {collaborators.map(
            (
              collaborator: {
                image: string;
                name: string;
                university: string;
                telephone?: string | undefined;
                fax?: string | undefined;
                cell?: string | undefined;
                email?: string | undefined;
              },
              index: Key | null | undefined
            ) => (
              <Collaborator collaborator={collaborator} key={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default InternationCollaborators;
