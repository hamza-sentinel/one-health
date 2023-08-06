import { Modal } from "@mui/base";
import { useRef, useState } from "react";
import { FaSpinner, FaTimes } from "react-icons/fa";
import Field from "../../@types/Field";

const CustomModal = ({
  open,
  setOpen,
  onSubmit,
  title,
  fields,
  buttonText,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (event: any) => void;
  title: string;
  fields: Field[];
  buttonText?: string;
}) => {
  const modal = useRef(null);
  const [adding, setAdding] = useState(false);

  setTimeout(() => {
    if (!modal.current) return;

    const modalElement = modal.current as HTMLElement;
    if (!open) return;

    setTimeout(() => {
      modalElement.style.opacity = "1";
      modalElement.classList.add("translate-y-0");
    }, 100);
  }, 100);

  function closeIfItsBackdrop(event: any) {
    if (event.target.classList.contains("MuiModal-root")) {
      setOpen(false);
    }
  }

  async function beforeSubmit(event: any) {
    setAdding(true);
    await onSubmit(event);
    event.target.reset();
    setAdding(false);
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-60 backdrop-blur grid place-content-center opacity-0 transition-all duration-300 -translate-y-1/2"
      onClick={closeIfItsBackdrop}
      ref={modal}
    >
      <div className="relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col justify-center px-4 py-6 bg-white rounded-md sm:px-8">
          <h2 className="text-2xl mb-4 sm:text-3xl">{title}</h2>
          <form className="flex flex-col gap-4" onSubmit={beforeSubmit}>
            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name}>
                  {field.label}{" "}
                  {field.required && <span className="text-rose-600">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required={field.required}
                  accept={field.accept}
                  defaultValue={field.value || ""}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-full flex justify-center items-center gap-2 disabled:opacity-50"
              disabled={adding}
            >
              {buttonText || "Submit"}{" "}
              {adding && <FaSpinner className="animate-spin" />}
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
