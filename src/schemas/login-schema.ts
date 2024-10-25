import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(2, "O nome precisa ter no mínimo dois caracteres"),
})


export type LoginSchema =  z.infer<typeof loginSchema>