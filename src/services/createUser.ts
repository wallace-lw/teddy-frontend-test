export const createUser = async () => {
	const response = await fetch(
		"https://boasorte.teddybackoffice.com.br/users",
		{
			method: "POST",
			mode: "no-cors",
			headers: {
				accept: "*/*",
			},
			body: JSON.stringify({
				name: "John Doe",
				salary: 5000,
				companyValuation: 500000,
			}),
		},
	);

	const result = await response.json();

	console.log(result);
};
