import Collaborator from "@/app/components/Collaborator/Collaborator";
import React from "react";

function NationalCollaborators() {
  const collaborators = [
    {
      name: "Prof. Dr. Timothy Geary",
      university:
        "Institute of Parasitology, Parasitology Building, McGill University, Macdonald Campus, 21,111 Lakeshore Road, Sainte-Anne-de-Bellevue, Quebec H9X 3V9, CANADA",
      telephone: "+1 514 398 7612",
      fax: "+1 514 398 7857",
      email: "timothy.g.geary@mcgill.ca",
      image: "/timothy-geary.jpeg",
    },
    {
      name: "Prof. (Emeritus) Thomas L. Rost",
      university:
        "Plant Biology, College of Biological Sciences, University of California, One Shields Avenue, Davis, CA-95616",
      telephone: "530-848-5640",
      email: "tlrost@ucdavis.edu",
      image: "/thomas.jpeg",
    },
    {
      name: "Nancy J. Allen",
      university:
        "MBA, Ph.D., Global Engagement Office, College of Agriculture & Environmental Sciences, University of California, Davis, Davis, CA 95616, USA",
      telephone: "1-530-754-0628",
      cell: "1-530-574-7235",
      email: "njallen@ucdavis.edu",
      image: "/nancy.jpeg",
    },
  ];
  return (
    <section>
      <div className="container">
        <h1 className="text-4xl text-gray-900 font-bold mt-2">
          International Collaborators
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {collaborators.map((collaborator, index) => (
            <Collaborator collaborator={collaborator} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NationalCollaborators;
