import { ICustomer } from "@/interfaces";
import { API_URL } from "@/utils/constants";

export const updateCustomer = async ({
	companyValuation,
	name,
	salary,
	id,
}: ICustomer) => {
	const response = await fetch(`${API_URL}/users/${id}`, {
		method: "PATCH",
		headers: {
			accept: "*/*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name,
			salary,
			companyValuation,
		}),
	});

	await response.json();
};
