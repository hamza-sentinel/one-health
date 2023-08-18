"use client";

import ModalComponent from "@/app/components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Item({
  data,
}: {
  data: {
    text: string;
    image: string;
    links: string;
    _id: string;
  };
}) {
  const [open, setOpen] = useState(false);

  data = {
    ...data,
    links: data.links || "",
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden">
      <Image
        src={data.image}
        alt="text"
        height={100}
        width={100}
        className="w-full object-cover"
      />
      <div className="px-2 py-4 grid md:px-4 xl:px-6">
        <h2 className="text-2xl font-medium mb-4">
          {data.text.slice(0, 30)}
          {data.text.length > 30 && "..."}
        </h2>
        {data.links && (
          <p className="mb-4 flex flex-wrap">
            {data.links
              ?.split(",")
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
        )}
        <button
          className="bg-blue-500 px-4 py-2 justify-self-end mt-auto text-white rounded-md hover:bg-blue-600"
          type="button"
          onClick={() => setOpen(true)}
        >
          See full info
        </button>
      </div>
      <ModalComponent open={open} setOpen={setOpen} data={data} />
    </article>
  );
}

export default Item;
