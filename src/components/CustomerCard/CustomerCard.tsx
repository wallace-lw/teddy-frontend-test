import {
	CircleDollarSign,
	IdCard,
	Minus,
	Pencil,
	Plus,
	Wallet,
} from "lucide-react";
import { Button } from "../ui/button";
import { CardItem } from "./CardItem";
import { DeleteCustomerDialog } from "@/components";
import { formatToBRLCurrency } from "@/utils";

interface ICustomerCardProps {
	isSelected?: boolean;
	id: number;
	name: string;
	salary: number;
	companyValuation: number;
}

export const CustomerCard: React.FC<ICustomerCardProps> = ({
	isSelected,
	companyValuation,
	name,
	id,
	salary,
}) => {
	const convertedSalary = formatToBRLCurrency(salary);
	const convertedCompanyValuation = formatToBRLCurrency(companyValuation);

	return (
		<div className="border border-teddy-gray-primary w-full rounded p-4 flex flex-col gap-4 text-sm md:text-[1rem]">
			<div className="flex flex-col gap-2">
				<CardItem Icon={IdCard} label={name} />
				<CardItem Icon={Wallet} label={`Salário: ${convertedSalary}`} />
				<CardItem
					Icon={CircleDollarSign}
					label={`Empresa: ${convertedCompanyValuation}`}
				/>
			</div>
			{isSelected ? (
				<div className="w-full flex justify-end">
					<Button className="bg-transparent text-red-700 p-0">
						<Minus />
					</Button>
				</div>
			) : (
				<div className="w-full flex justify-between items-center">
					<Button className="bg-transparent text-black p-0">
						<Plus />
					</Button>
					<Button className="bg-transparent text-black p-0">
						<Pencil />
					</Button>
					<DeleteCustomerDialog id={id} name={name} />
				</div>
			)}
		</div>
	);
};
