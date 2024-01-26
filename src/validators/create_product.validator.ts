import { mixed, number, object, string } from "yup";

export const createProductValidator = object({
  title: string().required("Title is required"),
  description: string().required("Description is required"),
  category: string().required("Category is required"),
  price: number().required("Price is required").min(3000),
  discount: number().required("Chosse discount percentage 0 or 10 or 50 etc."),
  images: mixed().required(),
});
