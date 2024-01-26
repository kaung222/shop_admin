import clsx from "clsx";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string | React.ReactNode;
  variant?: "outlined" | "contained" | "transparent";
  className?: string;
}

const getVariantClassNames = (variant?: string): string => {
  switch (variant) {
    case "outlined":
      return "border-blue-400 border-2 text-slate-800";
    case "contained":
      return "bg-blue-500 text-white";
    default:
      return "bg-transparent text-slate-800";
  }
};
const IconButton: React.FC<ButtonProps> = (props) => {
  const { children, onClick, variant, className, disabled } = props;
  const variantClassNames = getVariantClassNames(variant);

  return (
    <button
      className={clsx(
        "p-3 rounded-full dark:text-white  hover:text-white hover:bg-blue-500",
        variantClassNames,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;
