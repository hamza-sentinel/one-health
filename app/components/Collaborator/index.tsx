import Image from "next/image";

function Collaborator({
  collaborator,
}: {
  collaborator: {
    image: string;
    name: string;
    university: string;
    telephone?: string;
    fax?: string;
    cell?: string;
    email?: string;
  };
}) {
  return (
    <div className="flex flex-col items-center gap-y-4 mb-4 bg-white p-4 border rounded-md shadow-md">
      <Image
        src={collaborator.image}
        alt={collaborator.name}
        width={160}
        height={160}
        className="w-full object-contain rounded"
      />
      <div className="flex flex-col space-y-2">
        <h3 className="text-2xl text-gray-900 font-bold mb-2">
          {collaborator.name}
        </h3>
        <p className="text-gray-600">{collaborator.university}</p>
        <p className="text-gray-600">Telephone: {collaborator.telephone}</p>
        <p className="text-gray-600">
          email:{" "}
          <a href={`mailto:${collaborator.email}`}>{collaborator.email}</a>
        </p>
      </div>
    </div>
  );
}

export default Collaborator;
