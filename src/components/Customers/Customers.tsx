import { CustomerCard, CreateCustomerDialog, CardSkeleton } from "@/components";

import { useUsersData } from "@/hooks/useUsersData";
import { PaginationComponent } from "../Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelectedCustomers } from "@/hooks/useSelectedCustomers";
import { CustomersQuantitySelection } from "@/components";

export const Customers = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const { handleSelectCustomer, selectedCustomers, handleDeselectCustomer } =
		useSelectedCustomers();

	const page = searchParams.get("page");
	const limit = searchParams.get("limit");

	const { data, isLoading } = useUsersData({
		page: Number(page),
		limit: Number(limit),
	});

	const handleTotalItemsPerPage = (value: string) => {
		searchParams.set("limit", value);
		navigate(`/clientes?page=1&limit=${value}`);
	};

	return (
		<div className="w-full flex flex-col justify-center items-center mt-5 px-10 md:px-20 pb-10  gap-6">
			<div className="w-full flex flex-col-reverse gap-3 md:flex-row justify-between items-center">
				<span className="text-lg">
					<strong>{data?.clients.length}</strong> clientes encontrados
				</span>
				<CreateCustomerDialog />
			</div>
			<div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center">
				{isLoading
					? Array.from({ length: 16 }).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<CardSkeleton key={index} />
						))
					: data?.clients.map((customer) => (
							<CustomerCard
								key={customer.id}
								customer={customer}
								handleSelectCustomer={() => handleSelectCustomer(customer)}
								handleDeselectCustomer={() => handleDeselectCustomer(customer)}
								isSelected={selectedCustomers.some(
									(selectedCustomer) => selectedCustomer.id === customer.id,
								)}
							/>
						))}
			</div>
			<CustomersQuantitySelection
				handleTotalItemsPerPage={handleTotalItemsPerPage}
				limit={searchParams.get("limit")!}
			/>
			<PaginationComponent
				totalPages={data?.totalPages!}
				currentPage={data?.currentPage!}
				limit={Number(limit)}
			/>
		</div>
	);
};
