import { Navbar } from "@/components";

interface IProps {
	children: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};
