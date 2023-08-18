"use client";

import { useState } from "react";
import Collaborators from "./Collaborators";
import { Button } from "@mui/base";
import { FaPlus } from "react-icons/fa";
import CustomModal from "../../components/CustomFormModal";
import { ToastContainer, toast } from "react-toastify";
import Field from "../../@types/Field";
import { convertToBase64 } from "../../../utils";

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
      toast.error("Please fill all the fields");
      return false;
    }

    const mimetype = image.type;

    if (!mimetype.includes("image")) {
      toast.error("Please select an image for the collaborator");
      return false;
    }

    if (image.size === 0) {
      toast.error("Please select an image for the collaborator");
      return false;
    }

    if (image.size > 1000000) {
      toast.error(
        "The image is too big, please select an image with less than 1MB"
      );
      return false;
    }

    image = await convertToBase64(image);

    const response = await fetch("/api/international-collaborators", {
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
      toast.error(json.message);
      return false;
    }

    toast.success("Collaborator added successfully");
    return true;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    const added = await handleAdded(data);
    if (!added) return false;

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
    </div>
  );
};

export default Content;
