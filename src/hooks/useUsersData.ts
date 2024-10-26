import { getAllCustomers } from "@/services";
import { useQuery } from "@tanstack/react-query";

interface IProps {
	page?: number;
	limit?: number;
}

export const useUsersData = ({ limit, page }: IProps) => {
	const query = useQuery({
		queryKey: ["customers", page, limit],
		queryFn: () => getAllCustomers({ page, limit }),
	});

	return query;
};
