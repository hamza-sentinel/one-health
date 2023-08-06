"use client";
import Item from "./Item";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getData } from "../../utils";
import { FaSpinner } from "react-icons/fa";

function Items({ url, itemAdded }: { url: string; itemAdded: boolean }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tableChanged, setTableChanged] = useState(false);
  const [fieldLoading, setFieldLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFieldLoading(true);
    }

    getData(url).then((items) => {
      setItems(items);
      setIsLoading(false);
      setFieldLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, itemAdded, tableChanged]);

  async function handleDelete(e: any, id: string) {
    e.preventDefault();
    if (!confirm("Are you sure you want to delete this?")) return;
    const response = await fetch(url + id, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.error) {
      return toast.error(data.message);
    }

    toast.success(data.message);
    setTableChanged(!tableChanged);

    setItems(() => items.filter((c: any) => c._id !== id));
  }

  async function handleEdit(e: any, id: string) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

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
      return toast.error("Please fill all the fields");
    }

    const requestBody = {
      year: yearTrimmed,
      description: descriptionTrimmed,
      budget: budgetTrimmed,
      status: statusTrimmed,
    };

    const response = await fetch(url + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const json = await response.json();

    if (json.error) {
      return toast.error(json.message);
    }

    toast.success("Project edited successfully");
    form.reset();
    setTableChanged(!tableChanged);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
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
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-2xl my-4">
                  There are no projects
                </td>
              </tr>
            ) : (
              items.map((project: any, index: number) => (
                <Item
                  item={project}
                  key={project._id}
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

export default Items;
