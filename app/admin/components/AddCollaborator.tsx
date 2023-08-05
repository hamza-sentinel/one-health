"use client";
import { Button } from "@mui/base";
import { FaPlus, FaTimes } from "react-icons/fa";
import Modal from "@mui/base/Modal";
import { useState } from "react";

function AddCollaborator() {
  function openModel() {
    setOpen(true);
  }
  function closeIfItsBackdrop(event: any) {
    console.log();
    if (event.target.classList.contains("MuiModal-root")) {
      setOpen(false);
    }
  }

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={openModel}
        className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Add Collaborator <FaPlus />
      </Button>
      <Modal
        open={open}
        className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-60 backdrop-blur grid place-content-center"
        onClick={closeIfItsBackdrop}
      >
        <div className="relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col justify-center px-4 py-6 bg-white rounded-md sm:px-8">
            <h2 className="text-2xl mb-4 sm:text-3xl">Add Collaborator</h2>
            <form className="flex flex-col gap-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <label htmlFor="university">University</label>
              <input
                type="text"
                name="university"
                id="university"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                name="telephone"
                id="telephone"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md p-2 w-full"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddCollaborator;
