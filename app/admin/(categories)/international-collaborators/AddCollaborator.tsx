"use client";
import { Button } from "@mui/base";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomModal from "../../components/CustomFormModal";
import { convertToBase64 } from "../../utils";

function AddCollaborator({ onAdded }: { onAdded: () => void }) {
  const [open, setOpen] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

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
      return toast.error(json.message);
    }

    toast.success("Collaborator added successfully");
    form.reset();
    setOpen(false);
    onAdded();
  }

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "John Doe",
      required: true,
    },
    {
      name: "university",
      label: "University",
      type: "text",
      placeholder: "University of the Philippines",
      required: true,
    },
    {
      name: "telephone",
      label: "Telephone",
      type: "text",
      placeholder: "09123456789",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "@gmail.com",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "file",
      required: true,
      accept: ".jpeg, .jpg, .png",
    },
  ];

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Add Collaborator <FaPlus />
      </Button>
      <CustomModal
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit}
        title="Add Collaborator"
        fields={fields}
      />
      <ToastContainer />
    </>
  );
}

export default AddCollaborator;
