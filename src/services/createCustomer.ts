import { API_URL } from "@/utils/constants";

interface IProps {
	name: string;
	salary: number;
	companyValuation: number;
}

export const createCustomer = async ({
	companyValuation,
	name,
	salary,
}: IProps) => {
	const response = await fetch(`${API_URL}/users`, {
		method: "POST",
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
