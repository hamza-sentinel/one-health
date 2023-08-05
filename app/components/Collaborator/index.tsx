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
    <div className="flex flex-col items-center space-y-2">
      <Image
        src={collaborator.image}
        alt={collaborator.name}
        width={160}
        height={160}
        className="w-full h-96 object-cover rounded-md sm:rounded-full sm:w-64 sm:h-64"
      />
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl text-gray-900 font-bold">{collaborator.name}</h3>
        <p className="text-gray-600">{collaborator.university}</p>

        {collaborator.telephone && (
          <p className="text-gray-600">Telephone: {collaborator.telephone}</p>
        )}
        {collaborator.fax && (
          <p className="text-gray-600">Fax: {collaborator.fax}</p>
        )}
        {collaborator.cell && (
          <p className="text-gray-600">Cellphone: {collaborator.cell}</p>
        )}
        {collaborator.email && (
          <p className="text-gray-600">
            email:{" "}
            <a href={`mailto:${collaborator.email}`}>{collaborator.email}</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Collaborator;
