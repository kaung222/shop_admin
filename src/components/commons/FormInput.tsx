import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useAppDispatch } from "@/store/hooks";
import { setPreviewUrls } from "@/store/slices/createObjUrl";
type FormInputProps = {
  form: any;
  name: string;
  label?: string | undefined;
  description?: string | undefined;
  placeholder?: string | undefined;
  type: string | undefined;
  defaultValue?: string | number | undefined;
};
const FormInput = (props: FormInputProps) => {
  const { form, name, label, description, type, placeholder, defaultValue } =
    props;
  const dispatcher = useAppDispatch();
  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                defaultValue={defaultValue}
                onChange={(e) => {
                  field.onChange(
                    type === "file" ? e?.target?.files : e.target.value
                  );
                  //to preview file uploaded ==> storing obj urls in redex state
                  if (e.target.files) {
                    Array.from(e.target.files).map((image) => {
                      const url = URL.createObjectURL(image as Blob);
                      dispatcher(setPreviewUrls(url));
                    });
                  }
                }}
                placeholder={placeholder}
                type={type}
                // {...field}
                accept="image/*"
                multiple={name !== "thumbnail"}
                className="border-blue-500 border-2"
              />
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormInput;
