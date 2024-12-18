import { IAllUsersResponse } from "@/interfaces";
import { API_URL } from "@/utils/constants";

interface IProps {
	page?: number;
	limit?: number;
}

export const getAllCustomers = async ({
	page = 1,
	limit = 16,
}: IProps): Promise<IAllUsersResponse> => {
	const response = await fetch(`${API_URL}/users?page=${page}&limit=${limit}`, {
		method: "GET",
	});

	const data: IAllUsersResponse = await response.json();

	return data;
};
