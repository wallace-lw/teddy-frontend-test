import { API_URL } from "@/utils/constants";

export const deleteCustomer = async (id: number) => {
	const response = await fetch(`${API_URL}/users/${id}`, {
		method: "DELETE",
		headers: {
			accept: "*/*",
			"Content-Type": "application/json",
		},
	});

	return response;
};
