"use client";

import { getDataSingle } from "@/app/utils";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function Random({ url }: { url: string }) {
  const [items, setItems] = useState<any>();

  useEffect(() => {
    getDataSingle(url + "/api/random-posts").then((data) => setItems(data));
  }, [url]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      <h2>Read more...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {items &&
          items.success &&
          items.data.map(
            (item: {
              _id: string;
              title: string;
              slug: string;
              image: string;
              type: string;
            }) => (
              <article
                key={item._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="Research Image"
                  className="w-full h-48 object-cover"
                />
                <div
                  className="p-4 py-6.
                "
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h2>
                  <Link
                    href={`/${item.type}/${item.slug}`}
                    style={{ color: "white" }}
                    className="bg-blue-500 px-4 py-2 mb-2 justify-self-end mt-auto text-white rounded-md hover:bg-blue-600"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            )
          )}
      </div>
    </>
  );
}

export default Random;
