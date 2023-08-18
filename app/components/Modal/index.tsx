"use client";
import { Modal } from "@mui/base";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";

function ModalComponent({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: (x: boolean) => void;
  data: {
    text: string;
    image: string;
    links: string;
  };
}) {
  const modal = useRef(null);

  setTimeout(() => {
    if (!modal.current) return;

    const modalElement = modal.current as HTMLElement;
    if (!open) return;

    setTimeout(() => {
      modalElement.style.opacity = "1";
      modalElement.classList.add("translate-y-0");
    }, 100);
  }, 100);

  function closeIfItsBackdrop(event: any) {
    if (event.target.classList.contains("MuiModal-root")) {
      setOpen(false);
    }
  }

  return (
    <Modal
      open={open}
      className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-60 backdrop-blur grid place-content-center opacity-0 transition-all duration-300 -translate-y-1/2"
      onClick={closeIfItsBackdrop}
      ref={modal}
    >
      <div className="relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute left-4 top-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col justify-center px-4 py-6 bg-white rounded-md sm:px-8 overflow-auto max-h-screen">
          <Image
            src={data.image}
            alt="Image"
            width={100}
            height={100}
            className="w-full h-40 object-cover rounded mb-4 sm:h-60 md:h-64 lg:h-72"
          />
          <p className="max-w-prose">{data.text}</p>
          <p className="my-4">
            {data.links
              .split(",")
              .map((link) => link.trim())
              .map((link, i) => (
                <Link
                  href={link}
                  key={i}
                  className=" text-blue-700 underline underline-offset-4 p-2 rounded transition hover:bg-blue-100"
                >
                  {link}
                </Link>
              ))}
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default ModalComponent;
