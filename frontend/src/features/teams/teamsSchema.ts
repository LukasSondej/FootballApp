import { array, number, object, string, type InferType } from "yup";

export const orderSchema = object({
    name: string()
        .min(3, "Name must be at least 3 characters long")
        .required("Name is required"),
        
    yearEstablished: number()
        .typeError("Year established must be a valid number")
        .min(1, "Year must be greater than 0")
        .required("Year established is required"),
        
    location: string()
        .min(1, "Location cannot be empty")
        .required("Location is required"),
        
    playerIds: array()
        .of(string().required())
        .min(1, "Select at least one player!")
        .required("Players list is required")
});

export type OrderDataTeam = InferType<typeof orderSchema>;