import { object, string } from "yup";
import { z } from "zod";

export const LoginValidationSchema = z
  .object({
    email: z.string(),
  })
  .required({ email: true });

export const SendOtpValidationSchema = z.object({
  otp: z.string().min(6).max(6),
  // emailOrPhone: z.string().email().trim().max(18).min(1),
});
