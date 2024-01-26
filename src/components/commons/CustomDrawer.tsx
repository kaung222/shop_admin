import useOuterClick from "@/utils/useOuterClick";
import { useRef, useState } from "react";
import clsx from "clsx";

type DrawerProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};
const CustomDrawer = ({ onClose, isOpen, children }: DrawerProps) => {
  //   const [isOpen, setIsOpen] = useState(true);
  const drawerRef = useRef(null);
  useOuterClick(drawerRef, onClose);
  return (
    <div
      className={clsx(
        "top-0 duration-200 w-full h-screen",
        isOpen ? "w-[300px]" : "w-[100px]"
      )}
      ref={drawerRef}
    >
      <div>{children}</div>
    </div>
  );
};

export default CustomDrawer;
