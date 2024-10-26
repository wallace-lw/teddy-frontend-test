import { ICustomer } from "./ICustomer";

export interface IAllUsersResponse {
	clients: ICustomer[];
	totalPages: number;
	currentPage: number;
}
