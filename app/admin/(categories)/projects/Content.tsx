"use client";

import { useState } from "react";
import Projects from "./Items";
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
    const year = data.get("year");
    const description = data.get("description");
    const budget = data.get("budget");
    const status = data.get("status");

    const yearTrimmed = year?.toString().trim();
    const descriptionTrimmed = description?.toString().trim();
    const budgetTrimmed = budget?.toString().trim();
    const statusTrimmed = status?.toString().trim();

    if (
      yearTrimmed === "" ||
      descriptionTrimmed === "" ||
      budgetTrimmed === "" ||
      statusTrimmed === ""
    ) {
      toast.error("Please fill all the fields");
      return false;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        year: yearTrimmed,
        description: descriptionTrimmed,
        budget: budgetTrimmed,
        status: statusTrimmed,
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
          Add Project <FaPlus />
        </Button>
      </div>
      <Projects url={url} itemAdded={itemAdded} />
      <CustomModal
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit}
        title="Add Project"
        fields={fields}
      />
    </div>
  );
};

export default Content;
