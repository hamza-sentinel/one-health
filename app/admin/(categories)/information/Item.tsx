import Image from "next/image";
import CustomFormModal from "../../components/CustomFormModal";
import { useState } from "react";

const Item = ({
  item: { image, text, links, _id },
  onEdit,
  onDelete,
}: {
  item: {
    image: string;
    text: string;
    links: string;
    _id: string;
  };
  onEdit: (e: any, id: string) => void;
  onDelete: (e: any, id: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const fields = [
    {
      name: "text",
      type: "text",
      required: true,
      label: "Caption",
      value: text,
    },
    {
      name: "image",
      type: "file",
      required: false,
      label: "Image",
      accept: "image/*",
      image,
    },
    {
      name: "links",
      type: "text",
      required: false,
      label: "Links (separated by comma)",
      value: links,
    },
  ];

  return (
    <>
      <tr>
        <td className="border px-4 py-2">
          <Image src={image} width={100} height={100} alt="Image" />
        </td>
        <td className="border px-4 py-2">{text}</td>
        <td className="border px-4 py-2">{links}</td>
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
        title="Edit Information"
        fields={fields}
        onSubmit={(e) => onEdit(e, _id)}
        buttonText="Change Information"
      />
    </>
  );
};

export default Item;
