"use client";

import IconButton from "../commons/IconButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import IconSun from "../../assets/icons/IconSun";
import IconMoon from "@/assets/icons/IconMoon";
import { setMode } from "@/store/slices/modeSlice";
import IconUser from "@/assets/icons/IconUser";
import IconSearch from "@/assets/icons/IconSearch";

const Navbar = () => {
  const mode = useAppSelector((state) => state.mode.mode);
  const dispatch = useAppDispatch();

  return (
    <div className=" flex items-center z-50 bg-slate-200 dark:bg-gray-700 top-0 w-full justify-between px-5 md:py-3 py-1">
      {/* logo  */}
      <div className="flex items-center gap-3"></div>
      <div className="flex items-center justify-between gap-3 md:gap-5">
        <div className="flex">
          <IconButton>
            <IconSearch />
          </IconButton>
          {mode !== "dark" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem("mode", "dark");
                dispatch(setMode("dark"));
              }}
            >
              <IconMoon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem("mode", "light");
                dispatch(setMode("light"));
              }}
            >
              <IconSun className="text-white" />
            </IconButton>
          )}

          <Link href={"/profile"}>
            <IconButton>
              <IconUser />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
