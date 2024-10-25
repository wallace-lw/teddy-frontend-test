import { LogOutIcon, Menu } from "lucide-react";
import teddyLogo from "@/assets/images/teddy-logo.png";
import { Button } from "../ui/button";
import { links } from "@/utils/constants";
import { NavbarLinks } from "./NavbarLinks";
import { useAuthContext } from "@/contexts/AuthContext";

export const Navbar: React.FC = () => {
	const { logout, username } = useAuthContext();

	return (
		<nav className="flex px-20 py-4 items-center justify-between border-b border-b-teddy-gray-primary">
			<div className="flex items-center gap-6 ju">
				<Menu className="block md:hidden" />
				<img src={teddyLogo} alt="logo" />
			</div>
			<NavbarLinks links={links} />
			<div className="items-center gap-4 hidden md:flex">
				<span>
					Olá, <strong>{username}</strong>
				</span>
				<Button
					className="rounded-full size-7 bg-teddy-orange text-white"
					onClick={logout}
				>
					<LogOutIcon />
				</Button>
			</div>
		</nav>
	);
};
