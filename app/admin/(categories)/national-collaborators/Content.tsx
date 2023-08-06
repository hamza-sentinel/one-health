"use client";

import { useState } from "react";
import Collaborators from "./Collaborators";
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
    const name = data.get("name") as string;
    const university = data.get("university") as string;
    const telephone = data.get("telephone") as string;
    const email = data.get("email") as string;
    let image = data.get("image") as any;

    if (!name || !university || !telephone || !email) {
      return toast.error("Please fill all the fields");
    }

    if (image.size === 0)
      return toast.error("Please select an image for the collaborator");

    if (image.size > 1000000)
      return toast.error(
        "The image is too big, please select an image with less than 1MB"
      );

    image = await convertToBase64(image);

    const response = await fetch("/api/national-collaborators", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        university,
        telephone,
        email,
        image,
      }),
    });
    const json = await response.json();

    if (json.error) {
      return toast.error(json.message);
    }

    toast.success("Collaborator added successfully");
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    await handleAdded(data);

    form.reset();
    setOpen(false);
    setItemAdded(!itemAdded);
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <h1 className="text-3xl font-bold py-4">{title}</h1>
        <Button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Collaborator <FaPlus />
        </Button>
      </div>
      <Collaborators url={url} itemAdded={itemAdded} />
      <CustomModal
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit}
        title="Add Collaborator"
        fields={fields}
      />
      <ToastContainer />
    </div>
  );
};

export default Content;
