import { CustomerSchema } from "@/schemas";
import { createCustomer } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCustomer = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (data: CustomerSchema) => {
			await createCustomer({
				companyValuation: Number(data.companyValuation),
				name: data.name,
				salary: Number(data.salary),
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
