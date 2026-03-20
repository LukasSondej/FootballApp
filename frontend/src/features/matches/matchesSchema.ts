import { z } from "zod";

export const orderSchema = z.object({
   date: z.string()
        .min(1, "Date is required")
        .transform((val) => new Date(val).toISOString()),
        
    place: z.string().min(1, "Place is required"),
        
    duration: z.number({ invalid_type_error: "Duration must be a valid number" })
        .positive("Duration must be a positive number"),
        
    team1Id: z.string().min(1, "Select team 1"),
        
    team1Score: z.number({ invalid_type_error: "Score must be a valid number" })
        .min(0, "Score cannot be negative"),
        
    team2Id: z.string().min(1, "Select team 2"),
        
    team2Score: z.number({ invalid_type_error: "Score must be a valid number" })
        .min(0, "Score cannot be negative")
});

export type OrderDataMatches = z.infer<typeof orderSchema>;