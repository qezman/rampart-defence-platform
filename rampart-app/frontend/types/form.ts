import { z } from "zod";
import type { ServiceType } from "./service";

export const enquiryFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  organisation: z.string().min(2, "Organisation is required"),
  role: z.string().optional(),
  email: z.string().email("A valid email address is required"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  enquiryType: z.enum([
    "purchase",
    "repair",
    "refurbishment",
    "armouring",
    "other",
  ] as const),
  message: z.string().min(10, "Please describe your requirements"),
  attachment: z.any().optional(),
});

export type EnquiryFormData = z.infer<typeof enquiryFormSchema>;
export type EnquiryType = ServiceType;
