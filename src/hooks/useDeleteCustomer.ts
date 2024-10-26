import { deleteCustomer } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCustomer = (id: number) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: () => deleteCustomer(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["customers"],
			});
		},
		onError: (error) => {
			console.error("Failed to delete user:", error);
		},
	});

	return mutation;
};
