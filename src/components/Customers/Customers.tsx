import { CustomerCard, CreateCustomerDialog } from "@/components";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { useUsersData } from "@/hooks/useUsersData";
import { PaginationComponent } from "../Pagination";
import { useSearchParams } from "react-router-dom";

export const Customers = () => {
	const [searchParams] = useSearchParams();

	const page = searchParams.get("page");
	const limit = searchParams.get("limit");

	const { data, isLoading } = useUsersData({
		page: Number(page),
		limit: Number(limit),
	});

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="w-full flex flex-col justify-center items-center mt-5 px-10 md:px-20 pb-10  gap-6">
			<div className="w-full flex flex-col-reverse gap-3 md:flex-row justify-between items-center">
				<span className="text-lg">
					<strong>{data?.clients.length}</strong> clientes encontrados
				</span>
				<CreateCustomerDialog />
			</div>
			<div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center">
				{data?.clients.map((customer) => (
					<CustomerCard
						key={customer.id}
						companyValuation={customer.companyValuation}
						id={customer.id}
						name={customer.name}
						salary={customer.salary}
					/>
				))}
			</div>
			<div className="w-full flex items-center mt-2 gap-3">
				<p className="font-semibold">Clientes por página:</p>
				<Select>
					<SelectTrigger className="w-14">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="16">16</SelectItem>
							<SelectItem value="24">24</SelectItem>
							<SelectItem value="32">32</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<PaginationComponent
				totalPages={data?.totalPages!}
				currentPage={data?.currentPage!}
				limit={16}
			/>
		</div>
	);
};
