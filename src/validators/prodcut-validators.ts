//@ts-nocheck
import { z } from "zod";
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const MAX_FILE_SIZE = 1000000;
export const EditProductSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters!",
    })
    .max(50),
  description: z.string().max(500),
  category: z.string().min(3, { message: "Choose at least one category!" }),
  price: z
    .string()
    .min(3, { message: "Price should be between 100 and 999999!" })
    .max(6),
  discountPercentage: z.string().max(2),
  images: z.any(),
});

export const CreateProductSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters!",
    })
    .max(50),
  description: z.string().max(500),
  category: z.string().min(3, { message: "Choose at least one category!" }),
  price: z
    .string()
    .min(3, { message: "Price should be between 100 and 999999!" })
    .max(6),
  discountPercentage: z.string().max(2),
  images: z
    .any()
    .refine((fileList) => {
      if (fileList) {
        return Array.from(fileList).every(
          (file) => file?.size <= MAX_FILE_SIZE,
          { message: "Max image size is 1MB." }
        );
      }
    })
    .refine((fileList) => {
      if (fileList) {
        const isValidType = Array.from(fileList).every(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
          {
            message: "Only .jpg, .jpeg, .png, and .webp formats are supported.",
          }
        );
        return isValidType;
      }
    }),
});

//   thumbnail: z
//     .any()
//     .refine((fileList) => {
//       if (fileList) {
//         return Array.from(fileList)?.map(
//           //@ts-expect-error
//           (file) => file?.size <= MAX_FILE_SIZE,
//           `Max image size is 1MB.`
//         );
//       }
//     })
//     .refine((fileList) => {
//       if (fileList) {
//         return Array.from(fileList).map(
//           //@ts-expect-error
//           (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
//           "Only .jpg, .jpeg, .png and .webp formats are supported."
//         );
//       }
//     }),
// })
// .required({ images: true, thumbnail: true, title: true, price: true })
