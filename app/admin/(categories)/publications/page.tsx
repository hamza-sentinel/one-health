import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Items from "./Items";

async function LatestNews() {
  const url = process.env.URL! + "/api/publication/";

  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <h1 className="text-3xl font-bold py-4">Publications</h1>
        <Link
          href="/admin/publications/add"
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Publication <FaPlus />
        </Link>
      </div>
      <Items url={url} />
    </div>
  );
}

export default LatestNews;
