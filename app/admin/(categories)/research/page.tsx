import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Items from "./Items";

async function Research() {
  const url = process.env.URL! + "/api/research/";

  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <h1 className="text-3xl font-bold py-4">Research</h1>
        <Link
          href="/admin/research/add"
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Research <FaPlus />
        </Link>
      </div>
      <Items url={url} />
    </div>
  );
}

export default Research;
