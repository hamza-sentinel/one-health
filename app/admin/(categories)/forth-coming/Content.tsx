"use client";

import { useState } from "react";
import Items from "./Items";
import { Button } from "@mui/base";
import { FaPlus } from "react-icons/fa";
import CustomModal from "../../components/CustomFormModal";
import { ToastContainer, toast } from "react-toastify";
import Field from "../../@types/Field";
import { convertToBase64 } from "../../utils";

const Content = ({
  url,
  title,
  fields,
}: {
  url: string;
  title: string;
  fields: Field[];
}) => {
  const [itemAdded, setItemAdded] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleAdded(data: FormData) {
    const text = data.get("text") as string;
    const links = data.get("links") as string;
    const image = data.get("image") as File;

    const textTrimmed = text?.toString().trim();
    const linksTrimmed = links?.toString().trim();

    if (textTrimmed === "") {
      toast.error("Please fill all the fields");
      return false;
    }

    if (!image.type.includes("image")) {
      toast.error("Please upload an image");
      return false;
    }

    if (image.size > 2 * 1024 * 1024) {
      toast.error("Image size should be less than 2mb");
      return false;
    }
    const imageBase64 = await convertToBase64(image);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: textTrimmed,
        image: imageBase64,
        links: linksTrimmed,
      }),
    });
    const json = await response.json();

    if (json.error) {
      toast.error(json.message);
      return false;
    }

    toast.success(json.message);
    return true;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    const success = await handleAdded(data);
    if (!success) return false;

    form.reset();
    setOpen(false);
    setItemAdded(!itemAdded);
    return true;
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <h1 className="text-3xl font-bold py-4">{title}</h1>
        <Button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Forth Coming <FaPlus />
        </Button>
      </div>
      <Items url={url} itemAdded={itemAdded} />
      <CustomModal
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit}
        title="Add Forth Coming"
        fields={fields}
      />
    </div>
  );
};

export default Content;
