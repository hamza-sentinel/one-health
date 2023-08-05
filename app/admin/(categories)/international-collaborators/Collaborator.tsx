import Button from "@/app/components/utils/Button";
import Image from "next/image";
import Link from "next/link";
import CustomFormModal from "../../components/CustomFormModal";
import { useState } from "react";

const Collaborator = ({
  collaborator: { name, university, telephone, email, image, _id },
  onEdit,
  onDelete,
}: {
  collaborator: {
    name: string;
    university: string;
    telephone: string;
    email: string;
    image: string;
    _id: string;
  };
  onEdit: (e: any, id: string) => void;
  onDelete: (e: any, id: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "John Doe",
      required: true,
      value: name,
    },
    {
      name: "university",
      label: "University",
      type: "text",
      placeholder: "University of the Philippines",
      required: true,
      value: university,
    },
    {
      name: "telephone",
      label: "Telephone",
      type: "text",
      placeholder: "09123456789",
      required: true,
      value: telephone,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "@gmail.com",
      required: true,
      value: email,
    },
    {
      name: "image",
      label: "Image",
      type: "file",
      required: false,
      accept: ".jpeg, .jpg, .png",
    },
  ];

  return (
    <>
      <tr>
        <td className="border px-4 py-2">
          <Image
            src={image}
            width={50}
            height={50}
            alt={name}
            className="w-20 h-20 object-contain"
          />
        </td>
        <td className="border px-4 py-2">{name}</td>
        <td className="border px-4 py-2">{university}</td>
        <td className="border px-4 py-2">{telephone}</td>
        <td className="border px-4 py-2">{email}</td>
        <td className="border px-4 py-2">
          <div className="flex gap-2 justify-center items-center">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded"
              onClick={(e) => setOpen(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              onClick={(e) => onDelete(e, _id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
      <CustomFormModal
        open={open}
        setOpen={setOpen}
        title="Edit Collaborator"
        fields={fields}
        onSubmit={(e) => onEdit(e, _id)}
        buttonText="Change Collaborator"
      />
    </>
  );
};

export default Collaborator;
