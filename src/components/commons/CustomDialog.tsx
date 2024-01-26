import useOuterClick from "@/utils/useOuterClick";
import { useRef } from "react";
import clsx from "clsx";
import IconButton from "./IconButton";
import IconClose from "@/assets/icons/IconClose";

type DrawerProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};
const CustomDialog = ({ onClose, isOpen, children }: DrawerProps) => {
  const dialogRef = useRef(null);
  useOuterClick(dialogRef, onClose);
  return (
    <div
      className={clsx(
        " bg-transparent top-0 backdrop-blur-3xl duration-200 w-full flex items-center justify-center  absolute h-screen",
        isOpen ? " opacity-100 w-full" : " opacity-0 w-0"
      )}
    >
      <div
        className=" bg-slate-200 w-full md:w-[400px] rounded-md relative"
        ref={dialogRef}
      >
        <IconButton onClick={onClose} className=" absolute top-3 right-3">
          <IconClose />
        </IconButton>
        {children}
      </div>
    </div>
  );
};

export default CustomDialog;
