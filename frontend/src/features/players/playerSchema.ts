import { object, string, type InferType } from "yup";

export const orderSchema = object({
name: string().required("Name is required").min(3),
lastName: string().required("Last name is required").min(3),
teamId: string().nullable().defined().transform((value ) => (value==="" ? null : value))

})
export type OrderDataPlayer = InferType<typeof orderSchema>