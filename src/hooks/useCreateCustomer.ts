import { CustomerSchema } from "@/schemas";
import { createCustomer } from "@/services";
import { formatCurrencyToNumber } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCustomer = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (data: CustomerSchema) => {
			await createCustomer({
				companyValuation: formatCurrencyToNumber(data.companyValuation),
				name: data.name,
				salary: formatCurrencyToNumber(data.salary),
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["customers"],
			});
		},
	});

	return mutation;
};
