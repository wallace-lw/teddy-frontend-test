import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface IProps {
	label: string;
	to: string;
	isActive: boolean;
}

export const NavbarLink: React.FC<IProps> = ({ label, to, isActive }) => {
	return (
		<Link
			to={to}
			className={cn(isActive && "text-teddy-orange underline font-semibold")}
		>
			{label}
		</Link>
	);
};
