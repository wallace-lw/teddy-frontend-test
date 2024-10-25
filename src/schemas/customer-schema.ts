import { z } from "zod";

export const customerSchema = z.object({
	name: z.string().min(2, "O nome deverá ter pelo menos dois caracteres"),
	salary: z
		.string()
		.min(4, "O salário deverá ter pelo menos quatro caracteres"),
	companyValuation: z
		.string()
		.min(5, "O valor da empres deverá ter pelo menos cinco caracteres"),
});

export type CustomerSchema = z.infer<typeof customerSchema>;
