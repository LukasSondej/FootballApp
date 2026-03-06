import { array, number, object, string, type InferType } from "yup";

export const orderSchema = object({
    name: string().min(3).required("Name is required"),
    yearEstablished: number().min(1).required("yearEstablished is required"),
    location: string().min(1).required("location is required"),
    playersId: array().of(string().required()).required().defined()
})
export type OrderDataTeams = InferType<typeof orderSchema>