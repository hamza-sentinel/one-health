import Header from "@/app/admin/components/Header";
import Content from "./Content";
import { convertToBase64 } from "../../../utils";
import { toast } from "react-toastify";

async function Projects() {
  const fields = [
    {
      name: "year",
      type: "text",
      required: true,
      label: "Year",
    },
    {
      name: "description",
      type: "text",
      required: true,
      label: "Description",
    },
    {
      name: "budget",
      type: "text",
      required: true,
      label: "Budget",
    },
    {
      name: "status",
      type: "text",
      required: true,
      label: "Status",
    },
  ];

  const url = process.env.URL! + "/api/projects/";

  return <Content url={url} title="Projects" fields={fields} />;
}

export default Projects;
