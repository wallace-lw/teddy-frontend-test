import { Info } from "lucide-react";

interface IErrorMessageProps {
	message: string;
}

export const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
	return (
		<span className="text-red-700 text-sm flex items-center gap-1 font-medium">
			<Info size={18} /> {message}
		</span>
	);
};
