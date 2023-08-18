import Header from "@/app/admin/components/Header";
import Content from "./Content";
import { convertToBase64 } from "../../../utils";
import { toast } from "react-toastify";

async function LatestNews() {
  const fields = [
    {
      name: "text",
      type: "text",
      required: true,
      label: "Caption",
    },
    {
      name: "image",
      type: "file",
      required: true,
      label: "Image",
      accept: "image/*",
    },
    {
      name: "links",
      type: "text",
      required: false,
      label: "Links (separated by comma)",
    },
  ];

  const url = process.env.URL! + "/api/forthcoming/";

  return <Content url={url} title="Forthcoming" fields={fields} />;
}

export default LatestNews;
