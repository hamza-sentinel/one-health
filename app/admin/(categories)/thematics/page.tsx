"use client";
import { FaArrowLeft } from "react-icons/fa";

function Thematics() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-2xl flex-col">
      {/* Back button */}
      <button
        className="absolute top-4 left-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={() => window.history.back()}
      >
        <FaArrowLeft />
      </button>
      <code className="p-2 bg-gray-300 leading-0 rounded-md font-mono mb-4">
        /thematics
      </code>
      This is not editable yet
    </div>
  );
}

export default Thematics;
