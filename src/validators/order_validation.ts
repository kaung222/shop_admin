import { object, string } from "yup";

export const OrderValidationSchema = object({
  email: string().required("Email is required"),
  phone: string().required(),
  address: string().required(),
});
