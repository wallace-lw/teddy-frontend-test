import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(2, "O nome precisa ter no mínimo duas letras"),
})


export type LoginSchema =  z.infer<typeof loginSchema>