import Image from "next/image";
import CustomFormModal from "../../components/CustomFormModal";
import { useState } from "react";

const Item = ({
  item: { year, description, status, budget, _id },
  onEdit,
  onDelete,
}: {
  item: {
    year: string;
    description: string;
    status: string;
    budget: string;
    _id: string;
  };
  onEdit: (e: any, id: string) => void;
  onDelete: (e: any, id: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const fields = [
    {
      name: "year",
      type: "text",
      required: true,
      label: "Year",
      value: year,
    },
    {
      name: "description",
      type: "text",
      required: true,
      label: "Description",
      value: description,
    },
    {
      name: "budget",
      type: "text",
      required: true,
      label: "Budget",
      value: budget,
    },
    {
      name: "status",
      type: "text",
      required: true,
      label: "Status",
      value: status,
    },
  ];

  return (
    <>
      <tr>
        <td className="border px-4 py-2">{year}</td>
        <td className="border px-4 py-2">{description}</td>
        <td className="border px-4 py-2">{budget}</td>
        <td className="border px-4 py-2">{status}</td>
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
        title="Edit Project"
        fields={fields}
        onSubmit={(e) => onEdit(e, _id)}
        buttonText="Change Project"
      />
    </>
  );
};

export default Item;
