import { number, object, string, type InferType } from "yup";

export const orderSchema = object({
    date: string().required("date is required"),
    place: string().required("place is required"),
    duration:number().typeError("Time must be a number").required("Time is required").positive("Time cannot be negative "),
    team1Id: string().required("Select team 1"),
    team1Score: number().required("team1Score is required").min(0, "The Score cannot be negative"),
    team2Id: string().required("Select team 2"),
    team2Score: number().required("team2Score is required").min(0, "The Score cannot be negative")
});
export type OrderDataMatches = InferType<typeof orderSchema>