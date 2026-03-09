import z from "zod";

export const playerSchema = z.object({
    name: z.string().min(3, "imie min 3 znaki"),
    lastName: z.string().min(3,"nazwisko min 3 znaki"),
    teamId: z.string().nullable().optional()

})
export const teamSchema = z.object({
name: z.string().min(3, "nazwa min 3 znaki"),
yearEstablished: z.number().int().positive("rok musi byc liczbom dodatniom"),
location: z.string().min(1,"lokalizacja musi byc")

})
export const matchSchema = z.object({
    date: z.string(),
    place: z.string().min(1, "miejsce wymagane"),
    duration: z.number().int().positive("czas musi byc wiekszy od 0"),
    team1Id: z.string(),
  team2Id: z.string(),
  team1Score: z.number().int().nonnegative("Wynik nie może być ujemny"),
  team2Score: z.number().int().nonnegative("Wynik nie może być ujemny"),
})