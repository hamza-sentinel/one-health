import Header from "@/app/admin/components/Header";
import Content from "./Content";
import { convertToBase64 } from "../../utils";
import { toast } from "react-toastify";

async function NationalCollaborators() {
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
      <Header />
      <section className="container">
        <Content
          url={process.env.URL!}
          title="International Collaborators"
          fields={fields}
        />
      </section>
    </>
  );
}

export default NationalCollaborators;
