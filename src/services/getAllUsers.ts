import { IAllUsersResponse } from "@/interfaces";

interface IProps {
	page?: number;
	limit?: number;
}

export const getAllUsers = async ({
	page = 1,
	limit = 16,
}: IProps): Promise<IAllUsersResponse> => {
	const response = await fetch(
		`https://cors-anywhere.herokuapp.com/https://boasorte.teddybackoffice.com.br/users?page=${page}&limit=${limit}`,
		{
			method: "GET",
			mode: "cors",
		},
	);

	const data: IAllUsersResponse = await response.json();
	console.log(data);
	return data;
};
