import { deleteUser } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCustomer = (id: number) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: () => deleteUser(id),
		onSuccess: () => {
			// Invalidate and refetch queries related to the list of users
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
		onError: (error) => {
			console.error("Failed to delete user:", error);
		},
	});

	return mutation;
};
