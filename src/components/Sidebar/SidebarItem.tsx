import { LucideIcon } from "lucide-react";

interface ISidebarItemProps {
	action: () => void;
	Icon: LucideIcon;
	label: string;
}

export const SidebarItem: React.FC<ISidebarItemProps> = ({
	Icon,
	action,
	label,
}) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className="w-full flex items-center text-sm hover:text-teddy-orange cursor-pointer transition-all gap-2 hover:border-r-2 border-r-teddy-orange mt-4"
			onClick={action}
		>
			<Icon />
			<p className="font-semibold">{label}</p>
		</div>
	);
};
