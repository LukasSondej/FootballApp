import { number, object, string, type InferType } from "yup";

export const orderSchema = object({
    date: string()
        .required("Date is required"),
        
    place: string()
        .required("Place is required"),
        
    duration: number()
        .typeError("Duration must be a valid number")
        .positive("Duration must be a positive number")
        .required("Duration is required"),
        
    team1Id: string()
        .required("Select team 1"),
        
    team1Score: number()
        .typeError("Score must be a valid number")
        .min(0, "Score cannot be negative")
        .required("Team 1 score is required"),
        
    team2Id: string()
        .required("Select team 2"),
        
    team2Score: number()
        .typeError("Score must be a valid number")
        .min(0, "Score cannot be negative")
        .required("Team 2 score is required")
});

export type OrderDataMatches = InferType<typeof orderSchema>;