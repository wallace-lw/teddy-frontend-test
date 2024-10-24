import { LogOutIcon, Menu } from "lucide-react";
import teddyLogo from "@/assets/images/teddy-logo.png";
import { Button } from "../ui/button";
import { links } from "@/utils/constants";
import { NavbarLinks } from "./NavbarLinks";

interface INavbarProps {
	username: string;
}

export const Navbar: React.FC<INavbarProps> = ({ username }) => {
	return (
		<nav className="flex px-12 py-4 items-center justify-between border-b border-b-teddy-gray-primary">
			<div className="flex items-center gap-6">
				<Menu className="block lg:hidden" />
				<img src={teddyLogo} alt="logo" />
			</div>
			<NavbarLinks links={links} />
			<div className="flex items-center gap-4">
				<span>
					Olá, <strong>{username}</strong>
				</span>
				<Button className="rounded-full size-7 bg-teddy-orange text-white">
					<LogOutIcon />
				</Button>
			</div>
		</nav>
	);
};
