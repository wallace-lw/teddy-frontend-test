import { INavbarLinkProps } from "@/interfaces";
import { NavbarLink } from "./NavbarLink";
import { useLocation } from "react-router-dom";

interface INavbarLinksProps {
	links: INavbarLinkProps[];
}

export const NavbarLinks: React.FC<INavbarLinksProps> = ({ links }) => {
	const location = useLocation();

	return (
		<ul className="gap-4 hidden md:flex">
			{links.map((link) => (
				<li key={link.id}>
					<NavbarLink
						label={link.label}
						to={link.to}
						isActive={location.pathname === link.to}
					/>
				</li>
			))}
		</ul>
	);
};
