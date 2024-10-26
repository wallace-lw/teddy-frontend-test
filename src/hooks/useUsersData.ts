import { getAllUsers } from "@/services";
import { useQuery } from "@tanstack/react-query";

interface IProps {
	page?: number;
	limit?: number;
}

export const useUsersData = ({ limit, page }: IProps) => {
	const query = useQuery({
		queryKey: ["users"],
		queryFn: () => getAllUsers({ page, limit }),
	});

	return query;
};
