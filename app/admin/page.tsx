import Link from "next/link";
import Header from "./components/Header";
import { FaExternalLinkAlt } from "react-icons/fa";

function Admin() {
  return (
    <>
      <Header />

      <div className="container">
        <section className="flex flex-col py-4">
          <h1 className="text-4xl font-bold">Welcome to the Admin Dashboard</h1>
          <p className="mt-2 text-lg">Select a page to manage</p>
          {/* A grid */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link
              href="/admin/international-collaborators"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              International Collaborators <FaExternalLinkAlt />
            </Link>
            <Link
              href="/admin/national-collaborators"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              National Collaborators <FaExternalLinkAlt />
            </Link>
            {/* <Link
              href="/admin/thematics"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Thematics <FaExternalLinkAlt />
            </Link> */}
            <Link
              href="/admin/projects"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Projects <FaExternalLinkAlt />
            </Link>
            <Link
              href="/admin/research"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Research <FaExternalLinkAlt />
            </Link>
            <Link
              href="/admin/extension-article"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Extension Article <FaExternalLinkAlt />
            </Link>
            <Link
              href="/admin/publications"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Publications <FaExternalLinkAlt />
            </Link>
            <Link
              href="/admin/latest-news"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Latest News <FaExternalLinkAlt />
            </Link>
            <Link
              href="/admin/forth-coming"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Forth Coming <FaExternalLinkAlt />
            </Link>
            <Link
              href="/admin/information"
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Information <FaExternalLinkAlt />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Admin;
