"use client";

import { useState } from "react";
import AddCollaborator from "./AddCollaborator";
import Collaborators from "./Collaborators";

const CollaboratorsContent = ({ url }: { url: string }) => {
  const [itemAdded, setItemAdded] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <h1 className="text-3xl font-bold py-4">National Collaborators</h1>
        <AddCollaborator onAdded={() => setItemAdded(!itemAdded)} />
      </div>
      <Collaborators url={url} itemAdded={itemAdded} />
    </div>
  );
};

export default CollaboratorsContent;
