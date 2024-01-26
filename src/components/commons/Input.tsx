"use client";
import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";
type InputProps = {
  id?: string;
  placeholder: string;
  type: string;
  className?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
};

const Input = (props: InputProps) => {
  const { id, placeholder, register, error, type, name, className } = props;
  return (
    <div>
      <label htmlFor={id} className="my-2">
        {name.charAt(0).toLocaleUpperCase() + name.substring(1)}
      </label>
      <div
        className={clsx(
          "flex items-center border-2 focus:border-2 border-blue-500",
          className
        )}
      >
        <input
          id={id}
          type={type}
          multiple
          // required={type === "file"}
          {...register(name)}
          placeholder={placeholder}
          className="w-full p-2 border-none outline-none"
        />
      </div>
      <p className=" text-red-500 text-sm">{error}</p>
    </div>
  );
};

export default Input;
