import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, Group, LogOut, User } from "lucide-react";
import teddyLogo from "@/assets/images/teddy-logo.png";
import { SidebarLink } from "./SidebarLink";
import { useAuthContext, useSidebarContext } from "@/contexts";
import { SidebarItem } from "./SidebarItem";

export const Sidebar: React.FC = () => {
	const { showSidebar, toggleSidebar } = useSidebarContext();
	const { logout } = useAuthContext();

	useEffect(() => {
		if (showSidebar) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [showSidebar]);

	return (
		<div
			className={cn(
				"fixed top-0 left-0 h-full duration-300 transform",
				showSidebar ? "translate-x-0 w-60" : "-translate-x-full",
			)}
		>
			<div className="flex items-center justify-between p-4 bg-zinc-800 rounded-tr-3xl flex-col">
				<img src={teddyLogo} alt="Logo" className="mt-4" />
				<div className="w-full flex justify-end relative top-8 left-8">
					<button
						type="button"
						onClick={toggleSidebar}
						className={cn(
							"text-white bg-zinc-900 shadow-xl p-2 rounded-full aspect-square size-10 flex items-center justify-center",
							!showSidebar && "hidden",
						)}
					>
						<ChevronLeft className="mr-0.5" />
					</button>
				</div>
			</div>
			<div className="h-full w-full bg-teddy-white pt-10 pl-6 flex flex-col gap-4">
				<SidebarLink
					Icon={User}
					label="Clientes"
					to="/clientes?page=1&limit=16"
				/>
				<SidebarLink
					Icon={Group}
					label="Clientes selecionados"
					to="/clientes-selecionados"
				/>
				<SidebarItem action={logout} Icon={LogOut} label="Sair" />
			</div>
		</div>
	);
};
