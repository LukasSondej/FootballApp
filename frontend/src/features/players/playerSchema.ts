import { object, string, type InferType } from "yup";

export const orderSchema = object({
    name: string()
        .min(3, "Name must be at least 3 characters long")
        .required("Name is required"),
        
    lastName: string()
        .min(3, "Last name must be at least 3 characters long")
        .required("Last name is required"),
        
    teamId: string()
        .nullable()
        .defined()
        .transform((value) => (value === "" ? null : value))
});

export type OrderDataPlayer = InferType<typeof orderSchema>;