"use client";
import Collaborator from "./Collaborator";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { set } from "mongoose";
import { convertToBase64, getData } from "../../../utils";
import { FaSpinner } from "react-icons/fa";

function Collaborators({
  url,
  itemAdded,
}: {
  url: string;
  itemAdded: boolean;
}) {
  const [collaborators, setCollaborators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tableChanged, setTableChanged] = useState(false);
  const [fieldLoading, setFieldLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFieldLoading(true);
    }

    getData(url + "/api/national-collaborators").then((collaborators) => {
      setCollaborators(collaborators);
      setIsLoading(false);
      setFieldLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, itemAdded, tableChanged]);

  async function handleDelete(e: any, id: string) {
    e.preventDefault();
    if (!confirm("Are you sure you want to delete this collaborator?")) return;
    const response = await fetch(url + "/api/national-collaborators/" + id, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.error) {
      return toast.error(data.message);
    }

    toast.success(data.message);
    setTableChanged(!tableChanged);

    setCollaborators(() => collaborators.filter((c: any) => c._id !== id));
  }

  async function handleEdit(e: any, id: string) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const university = data.get("university") as string;
    const telephone = data.get("telephone") as string;
    const email = data.get("email") as string;
    let image = data.get("image") as any;

    if (!name || !university || !telephone || !email) {
      toast.error("Please fill all the required fields");
      return false;
    }

    const isImageEdited = image.size !== 0;
    let requestBody;

    if (isImageEdited) {
      if (image.size > 1000000) {
        toast.error(
          "The image is too big, please select an image with less than 1MB"
        );
        return false;
      }

      if (!image.type.includes("image")) {
        toast.error("Please select an image for the collaborator");
        return false;
      }
      image = await convertToBase64(image);
      requestBody = {
        name,
        university,
        telephone,
        email,
        image,
      };
    } else {
      requestBody = {
        name,
        university,
        telephone,
        email,
      };
    }

    const response = await fetch("/api/national-collaborators/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const json = await response.json();

    if (json.error) {
      toast.error(json.message);
      return false;
    }

    toast.success("Collaborator edited successfully");
    form.reset();
    setTableChanged(!tableChanged);
    return true;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">University</th>
              <th className="px-4 py-2">Telephone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </TableRow>
          </TableHead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <span className="flex justify-center items-center gap-2 text-2xl my-4">
                    <FaSpinner className="animate-spin" /> Loading...
                  </span>
                </td>
              </tr>
            ) : collaborators.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-2xl my-4">
                  There are no collaborators
                </td>
              </tr>
            ) : (
              collaborators.map((collaborator: any, index: number) => (
                <Collaborator
                  item={collaborator}
                  key={collaborator._id}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
            {fieldLoading && (
              <tr>
                <td colSpan={6} className="text-center">
                  <span className="flex justify-center items-center gap-2 text-2xl my-4">
                    <FaSpinner className="animate-spin" /> Loading...
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
      <ToastContainer />
    </>
  );
}

export default Collaborators;
