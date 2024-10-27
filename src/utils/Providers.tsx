import { AuthProvider, SidebarProvider } from "@/contexts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProps {
	children: JSX.Element;
}

const queryClient = new QueryClient();

export const Providers: React.FC<IProps> = ({ children }) => {
	return (
		<AuthProvider>
			<SidebarProvider>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</SidebarProvider>
		</AuthProvider>
	);
};
