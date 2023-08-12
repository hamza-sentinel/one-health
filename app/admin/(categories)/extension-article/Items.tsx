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
import { convertToBase64, getData } from "../../utils";
import { FaSpinner } from "react-icons/fa";

function Items({ url }: { url: string }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tableChanged, setTableChanged] = useState(false);
  const [fieldLoading, setFieldLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFieldLoading(true);
    }
    getData(url)
      .then((items) => {
        setItems(
          items.map((item: any) => {
            return {
              title: item.title,
              slug: item.slug,
              _id: item._id,
              image: item.image,
            };
          })
        );
        setIsLoading(false);
        setFieldLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, tableChanged]);

  async function handleDelete(e: any, slug: string) {
    e.preventDefault();
    if (!confirm("Are you sure you want to delete this?")) return;
    const response = await fetch(url + slug, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.error) {
      return toast.error(data.message);
    }

    toast.success(data.message);
    setTableChanged(!tableChanged);

    setItems(() => items.filter((c: any) => c.slug !== slug));
  }

  async function handleEdit(e: any, id: string) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const text = data.get("text");
    const links = data.get("links");
    const image = data.get("image") as File;

    const textTrimmed = text?.toString().trim();
    const linksTrimmed = links?.toString().trim();

    if (textTrimmed === "" || linksTrimmed === "") {
      toast.error("Please fill all the fields");
      return false;
    }
    let requestBody = {};
    // if image is added
    if (image.size > 0) {
      if (!image.type.includes("image")) {
        toast.error("Please upload an image");
        return false;
      }

      if (image.size > 2 * 1024 * 1024) {
        toast.error("Image size should be less than 2mb");
        return false;
      }

      const imageBase64 = await convertToBase64(image);
      requestBody = {
        text: textTrimmed,
        image: imageBase64 as string,
        links: linksTrimmed,
        noContent: true,
      };
    } else
      requestBody = {
        text: textTrimmed,
        links: linksTrimmed,
        noContent: true,
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
      toast.error(json.message);
      return false;
    }

    toast.success("Successfully edited");
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
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={10} className="text-center">
                  <span className="flex justify-center items-center gap-2 text-2xl py-4">
                    <FaSpinner className="animate-spin" /> Loading...
                  </span>
                </td>
              </tr>
            )}
            {hasError && (
              <tr>
                <td colSpan={10} className="text-center">
                  <span className="flex justify-center items-center gap-2 text-2xl py-4">
                    Something went wrong, please refresh
                  </span>
                </td>
              </tr>
            )}
            {items.length === 0 && !isLoading && !hasError ? (
              <tr>
                <td colSpan={10} className="text-center text-2xl py-6">
                  There are no news
                </td>
              </tr>
            ) : (
              items.map((item: any, index: number) => (
                <Item item={item} key={item._id} onDelete={handleDelete} />
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
