import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(2, "No mínimo 2 letras"),
})


export type LoginSchema =  z.infer<typeof loginSchema>