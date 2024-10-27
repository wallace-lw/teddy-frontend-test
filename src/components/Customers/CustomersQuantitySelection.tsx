import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

interface IProps {
	handleTotalItemsPerPage: (value: string) => void;
	limit?: string;
}

export const CustomersQuantitySelection: React.FC<IProps> = ({
	handleTotalItemsPerPage,
	limit,
}) => {
	return (
		<div className="w-full flex items-center mt-2 gap-3">
			<p className="font-semibold">Clientes por página:</p>
			<Select onValueChange={(value) => handleTotalItemsPerPage(value)}>
				<SelectTrigger className="w-14">
					<SelectValue placeholder={limit} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="16">16</SelectItem>
						<SelectItem value="24">24</SelectItem>
						<SelectItem value="32">32</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};
