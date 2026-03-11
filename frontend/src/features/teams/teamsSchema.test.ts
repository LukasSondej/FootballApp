
import { describe, it , expect} from "vitest";
import { orderSchema } from "./teamsSchema";

describe("Team Form Validation", () => {
    it("should fail when team name is less than 3 characters", async () => {
        const invalidData = {
           name: "FC", 
           yearEstablished: 2000,
           location: "Warszawa",
           playerIds: [] 
       };
       const isValid = await orderSchema.isValid(invalidData);
       expect(isValid).toBe(false)
   
    })
    it("should pass when all data is valid", async () => {
       const validData = {
           name: "Real Madrid", 
           yearEstablished: 1902,
           location: "Madrid",
           playerIds: [] 
       };

       const isValid = await orderSchema.isValid(validData);
       expect(isValid).toBe(true); 
   });
})