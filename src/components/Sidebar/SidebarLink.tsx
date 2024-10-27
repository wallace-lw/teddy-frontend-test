import { useSidebarContext } from "@/contexts";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ISidebarLinkProps {
	Icon: LucideIcon;
	label: string;
	to: string;
}

export const SidebarLink: React.FC<ISidebarLinkProps> = ({
	Icon,
	label,
	to,
}) => {
	const { toggleSidebar } = useSidebarContext();

	return (
		<Link
			to={to}
			className="w-full flex items-center text-sm hover:text-teddy-orange cursor-pointer transition-all gap-2 hover:border-r-2 border-r-teddy-orange"
			onClick={toggleSidebar}
		>
			<Icon />
			<p className="font-semibold">{label}</p>
		</Link>
	);
};
