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

interface ICustomerCardProps {
	isSelected?: boolean;
}

export const CustomerCard: React.FC<ICustomerCardProps> = ({ isSelected }) => {
	return (
		<div className="border border-teddy-gray-primary w-full rounded p-4 flex flex-col gap-4 text-sm md:text-[1rem]">
			<div className="flex flex-col gap-2">
				<CardItem Icon={IdCard} label="Wallace Leonardo" />
				<CardItem Icon={Wallet} label="Salário: R$3500,00" />
				<CardItem Icon={CircleDollarSign} label="Empresa: R$550.000,00" />
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
					<DeleteCustomerDialog />
				</div>
			)}
		</div>
	);
};
