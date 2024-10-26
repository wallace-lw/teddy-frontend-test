import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IProps {
	action: () => void;
	Icon?: LucideIcon;
	text?: string;
	currentPage?: number;
	pageNumber?: number;
	disabled?: boolean;
	isActive?: boolean;
}

export const PaginationButton: React.FC<IProps> = ({
	action,
	Icon,
	text,
	isActive = false,
	disabled = false,
}) => {
	return (
		<>
			{Icon && (
				<button
					onClick={action}
					type="button"
					className="shadow-md flex items-center rounded-[8px] bg-neutral-blue-1 p-1.5"
				>
					<Icon className="text-teddy-orange" />
				</button>
			)}
			{text && (
				<button
					type="button"
					onClick={action}
					className={cn(
						"shadow-md flex items-center rounded-[8px] bg-neutral-blue-1 p-1.5 text-teddy-orange",
						isActive ? "bg-teddy-orange text-white shadow-md" : "",
					)}
					disabled={disabled}
				>
					<p className="paragraph-2 w-6 font-semibold">{text}</p>
				</button>
			)}
		</>
	);
};
