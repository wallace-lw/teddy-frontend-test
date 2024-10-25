import { LucideIcon } from "lucide-react";

interface ICardItemProps {
	Icon: LucideIcon;
	label: string;
}

export const CardItem: React.FC<ICardItemProps> = ({ Icon, label }) => {
	return (
		<div className="flex gap-2 items-center w-full ">
			<Icon className="text-teddy-orange" />
			<p className="font-semibold">{label}</p>
		</div>
	);
};
