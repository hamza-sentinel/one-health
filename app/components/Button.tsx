import {Button as MUIButton} from "@mui/base";
import { HTMLAttributes, ReactNode } from "react";

export default function Button({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <MUIButton
      className={className + " w-fit bg-emerald-600 px-4 py-2 active:bg-emerald-700 hover:bg-emerald-500"}
      type={type}
    >
      {children}
    </MUIButton>
  );
}