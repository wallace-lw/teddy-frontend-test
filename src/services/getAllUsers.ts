// import queryString from "query-string";

// interface IProps {
// 	params: {
// 		page?: number;
// 		limit?: number;
// 	};
// }

export const getAllUsers = async () => {
	// const stringParams = queryString.stringify(
	// 	{ limit: 16, page: 1 },
	// 	{
	// 		skipNull: true,
	// 		skipEmptyString: true,
	// 	},
	// );
	const response = await fetch(
		"https://boasorte.teddybackoffice.com.br/users?page=1&limit=16",
		{
			method: "GET",
			mode: "cors",
		},
	);

	return await response.json();
};
