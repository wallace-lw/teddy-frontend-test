import { CustomerCard, CreateCustomerDialog } from "@/components";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

export const Customers = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center mt-5 px-10 md:px-20 pb-10  gap-6">
			<div className="w-full flex flex-col-reverse gap-3 md:flex-row justify-between items-center">
				<span className="text-lg">
					<strong>16</strong> clientes encontrados
				</span>
				<CreateCustomerDialog />
			</div>
			<div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center">
				{Array.from({ length: 16 }).map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<CustomerCard key={index} />
				))}
				<div className="w-full flex items-center mt-2 gap-3">
					<p className="font-semibold">Clientes por página:</p>
					<Select>
						<SelectTrigger className="w-14">
							<SelectValue>16</SelectValue>
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
			</div>
		</div>
	);
};
