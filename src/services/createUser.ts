interface IProps {
	name: string;
	salary: number;
	companyValuation: number;
}

export const createUser = async ({
	companyValuation,
	name,
	salary,
}: IProps) => {
	const response = await fetch(
		"https://cors-anywhere.herokuapp.com/https://boasorte.teddybackoffice.com.br/users",
		{
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
		},
	);

	const result = await response.json();

	console.log(result);
};
