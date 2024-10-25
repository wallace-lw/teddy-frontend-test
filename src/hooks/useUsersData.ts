import { getAllUsers } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useUsersData = () => {
	const query = useQuery({
		queryKey: ["users"],
		queryFn: getAllUsers,
	});

	return query;
};
