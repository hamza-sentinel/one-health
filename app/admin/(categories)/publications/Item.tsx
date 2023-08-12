import Image from "next/image";
import CustomFormModal from "../../components/CustomFormModal";
import { useState } from "react";
import Link from "next/link";

const Item = ({
  item: { image, title, slug, _id },
  onDelete,
}: {
  item: {
    image: string;
    title: string;
    slug: string;
    _id: string;
  };
  onDelete: (e: any, id: string) => void;
}) => {
  return (
    <>
      <tr>
        <td className="border px-4 py-2">
          <Image src={image} width={100} height={100} alt="Image" />
        </td>
        <td className="border px-4 py-2">{title}</td>
        <td className="border px-4 py-2">{slug}</td>
        <td className="border px-4 py-2">
          <div className="flex gap-2 justify-center items-center">
            <Link
              href={"/admin/publications/edit/" + slug}
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded"
            >
              Edit
            </Link>
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              onClick={(e) => onDelete(e, slug)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Item;
