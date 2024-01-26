import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string | React.ReactNode;
  variant?: "outlined" | "contained" | "transparent";
  className?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
}

const getVariantClassNames = (variant?: string): string => {
  switch (variant) {
    case "outlined":
      return "border-blue-400 border-2 text-slate-800";
    case "contained":
      return "bg-blue-500 text-white";
    default:
      return "bg-transparent text-slate-800 shadow-md shadow-slate-500";
  }
};
const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    variant,
    endIcon,
    startIcon,
    className,
    disabled,
  } = props;
  const variantClassNames = getVariantClassNames(variant);

  return (
    <button
      className={clsx(
        "px-4 h-12 rounded-md active:scale-95 flex items-center justify-center gap-3 md:gap-5  duration-100 w-full capitalize",
        variantClassNames,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
