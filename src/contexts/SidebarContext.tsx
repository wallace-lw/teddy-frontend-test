import { IProviderProps } from "@/interfaces";
import { createContext, useContext, useState } from "react";

interface ISidebarContextProps {
	showSidebar: boolean;
	toggleSidebar: () => void;
}

export const SidebarContext = createContext({} as ISidebarContextProps);

export const SidebarProvider: React.FC<IProviderProps> = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => setShowSidebar(!showSidebar);

	const contextValue: ISidebarContextProps = {
		showSidebar,
		toggleSidebar,
	};

	return (
		<SidebarContext.Provider value={contextValue}>
			{children}
		</SidebarContext.Provider>
	);
};

export function useSidebarContext() {
	const context = useContext(SidebarContext);

	if (!context) {
		throw new Error(
			"useAuthContext must be used within an AuthContextProvider",
		);
	}

	return context;
}
