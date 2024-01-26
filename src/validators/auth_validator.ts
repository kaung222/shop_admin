import { object, string } from "yup";

export const RegisterValidationSchema = object({
  email: string().required("Email is required"),
  password: string().required(),
});
