import { CircleDollarSign, IdCard, Minus, Plus, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { CardItem } from "./CardItem";
import { DeleteCustomerDialog } from "@/components";
import { formatToBRLCurrency } from "@/utils";
import { UpdateCustomerDialog } from "../UpdateCustomerDialog/UpdateCustomerDialog";
import { ICustomer } from "@/interfaces";

interface ICustomerCardProps {
	isSelected?: boolean;
	customer: ICustomer;
	handleSelectCustomer?: () => void;
	handleDeselectCustomer?: () => void;
}

export const CustomerCard: React.FC<ICustomerCardProps> = ({
	isSelected,
	customer,
	handleSelectCustomer,
	handleDeselectCustomer,
}) => {
	const convertedSalary = formatToBRLCurrency(customer.salary);
	const convertedCompanyValuation = formatToBRLCurrency(
		customer.companyValuation,
	);

	return (
		<div className="border border-teddy-gray-primary w-full rounded p-4 flex flex-col gap-4 text-sm md:text-[1rem]">
			<div className="flex flex-col gap-2">
				<CardItem Icon={IdCard} label={customer.name} />
				<CardItem Icon={Wallet} label={`Salário: ${convertedSalary}`} />
				<CardItem
					Icon={CircleDollarSign}
					label={`Empresa: ${convertedCompanyValuation}`}
				/>
			</div>

			{isSelected ? (
				<Button
					className="bg-transparent text-red-700 p-0"
					onClick={handleDeselectCustomer}
				>
					<Minus />
				</Button>
			) : (
				<div className="w-full flex justify-between items-center">
					<Button
						className="bg-transparent text-black p-0"
						onClick={handleSelectCustomer}
					>
						<Plus />
					</Button>
					<UpdateCustomerDialog
						id={customer.id}
						name={customer.name}
						salary={customer.salary}
						companyValuation={customer.companyValuation}
					/>
					<DeleteCustomerDialog id={customer.id} name={customer.name} />
				</div>
			)}
		</div>
	);
};
