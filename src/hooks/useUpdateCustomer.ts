import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCustomer } from "@/services";
import { CustomerSchema } from "@/schemas";
import { formatCurrencyToNumber } from "@/utils";

export const useUpdateCustomer = (id: number) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (data: CustomerSchema) => {
			await updateCustomer({
				id: id,
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
