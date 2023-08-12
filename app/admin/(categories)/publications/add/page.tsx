"use client";

import mammoth from "mammoth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";
import { FaSignLanguage, FaSpinner } from "react-icons/fa";
import { convertToBase64 } from "@/app/admin/utils";
// @ts-ignore
import { html as parseHTML } from "pdf2html";

function AddExtensionArticle() {
  const preview = useRef(null);
  const titleRef = useRef(null);
  const slugRef = useRef(null);
  const fileRef = useRef(null);
  const imageRef = useRef(null);

  const [html, setHtml] = useState("");
  const [messages, setMessages] = useState<any>();
  const [isAddingPublication, setIsAddingPublication] = useState(false);

  async function previewArticle() {
    const fileElement = fileRef.current! as HTMLInputElement;

    if (fileElement.files?.length === 0) {
      fileElement.classList.add("border-red-500");
      toast.error("Please upload a valid file");
      return;
    } else {
      fileElement.classList.remove("border-red-500");
    }

    const file = fileElement.files![0];

    if (!file.type.includes("document") && !file.type.includes("pdf")) {
      fileElement.classList.add("border-red-500");
      toast.error("Please upload a valid file");
      return;
    } else {
      fileElement.classList.remove("border-red-500");
    }

    await new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file as Blob);

      fileReader.onload = async (e) => {
        const arrayBuffer = e.target?.result;
        const options = {};

        try {
          // @ts-ignore
          const result = await mammoth.convertToHtml({ arrayBuffer }, options);
          const html = result.value; // The generated HTML
          const messages = result.messages; // Any messages, such as warnings during conversion

          setHtml(html);
          setMessages(messages);

          resolve(html);
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
          reject(error);
        }
      };
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const fileElement = fileRef.current! as HTMLInputElement;
    const slugElement = slugRef.current! as HTMLInputElement;
    const titleElement = titleRef.current! as HTMLInputElement;
    const imageElement = imageRef.current! as HTMLInputElement;

    const title = data.get("title");
    const file = data.get("file") as File;
    let slug = data.get("slug") as any;
    const image = data.get("image") as File;

    let hasError = false;

    slug = slug?.toString().trim();

    if (slug.includes(" ")) {
      slugElement.classList.add("border-red-500");
      toast.error("Slug cannot contain spaces");
      return;
    }

    //  && !file.type.includes("pdf")
    if (!file.type.includes("document")) {
      fileElement.classList.add("border-red-500");
      hasError = true;
    } else {
      fileElement.classList.remove("border-red-500");
    }

    if (title === "") {
      titleElement.classList.add("border-red-500");
      hasError = true;
    } else {
      titleElement.classList.remove("border-red-500");
    }

    if (slug === "") {
      slugElement.classList.add("border-red-500");
      hasError = true;
    } else {
      slugElement.classList.remove("border-red-500");
    }

    if (!image.type.includes("image")) {
      imageElement.classList.add("border-red-500");
      hasError = true;
    } else {
      imageElement.classList.remove("border-red-500");
    }

    if (image.size > 1000000) {
      imageElement.classList.add("border-red-500");
      hasError = true;
    } else {
      imageElement.classList.remove("border-red-500");
    }

    if (hasError) return toast.error("Please fill all the fields");

    const formDataToBeSubmitted = new FormData();

    if (file.type.includes("document")) {
      setIsAddingPublication(true);
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file as Blob);

      fileReader.onload = async (e) => {
        const arrayBuffer = e.target?.result;
        const options = {};

        try {
          // @ts-ignore
          const result = await mammoth.convertToHtml({ arrayBuffer }, options);
          const html = result.value; // The generated HTML
          const messages = result.messages; // Any messages, such as warnings during conversion

          const imageString = await convertToBase64(image);

          formDataToBeSubmitted.set("slug", slug);
          formDataToBeSubmitted.set("title", title as string);
          formDataToBeSubmitted.set("image", imageString as string);
          formDataToBeSubmitted.set("content", html as string);

          const res = await fetch("/api/publication", {
            method: "POST",
            body: formDataToBeSubmitted,
          });

          const dataRes = await res.json();

          if (dataRes.success) {
            toast.success("Article added successfully");
            form.reset();
            setHtml("");
          }

          if (dataRes.error) {
            toast.error(dataRes.error);
          }
          setIsAddingPublication(false);
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };
    }
    // } else if (file.type.includes("pdf")) {
    //   const imageString = await convertToBase64(image);
    //   data.set("file", file as File);
    //   data.set("slug", slug);
    //   data.set("title", title as string);
    //   data.set("image", imageString as string);

    //   const res = await fetch("/api/extension-article", {
    //     method: "POST",
    //     body: data,
    //   });

    //   const dataRes = await res.json();

    //   if (dataRes.success) {
    //     toast.success("Article added successfully");
    //     form.reset();
    //     setHtml("");
    //   }

    //   if (dataRes.error) {
    //     toast.error(dataRes.error);
    //   }
    //   setIsAddingArticle(false);
    // }
  }

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-8">Add Publication</h1>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="title"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="title"
              type="text"
              name="title"
              placeholder="e.g. some title"
              ref={titleRef}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="slug"
            >
              Slug (name to display in URL){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="slug"
              type="text"
              name="slug"
              placeholder="e.g. a-long-slug-example"
              ref={slugRef}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="file"
            >
              Your file (.docx) <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="file"
              type="file"
              placeholder="file"
              name="file"
              // accept=".pdf,.docx"
              accept=".docx"
              ref={fileRef}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="image"
            >
              Thumbnail image <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="image"
              type="file"
              placeholder="file"
              name="image"
              accept="image/*"
              ref={imageRef}
            />
          </div>
        </div>

        <button
          className="border border-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition"
          type="button"
          onClick={previewArticle}
        >
          Preview
        </button>
        <button
          disabled={isAddingPublication}
          className={`ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition inline-flex items-center gap-2 disabled:opacity-75 disabled:hover:bg-blue-500`}
        >
          Add publication
          {isAddingPublication && (
            <FaSpinner className="inline-block animate-spin" />
          )}
        </button>
      </form>
      {html && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div
            ref={preview}
            className="blog"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      )}

      <ToastContainer />
    </section>
  );
}

export default AddExtensionArticle;
