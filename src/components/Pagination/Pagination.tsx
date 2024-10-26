import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
} from "../ui/pagination";
import { PaginationButton } from "./PaginationButton";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IProps {
	totalPages: number;
	currentPage: number;
	limit: number;
}

export const PaginationComponent: React.FC<IProps> = ({
	currentPage,
	totalPages,
	limit,
}) => {
	const [pageNumber, setPageNumber] = useState(1);

	const pages = Array.from({ length: totalPages }, (_, i) => ({
		label: i + 1,
		page: i + 1,
		isActive: i + 1 === currentPage,
	})).filter(
		(item) => item.page >= currentPage - 3 && item.page <= currentPage + 3,
	);

	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	const handleLastPage = () => {
		if (currentPage === totalPages) return;
		if (totalPages) {
			setPageNumber(totalPages);
			searchParams.set("page", String(totalPages));
			navigate(`/clientes?page=${totalPages}&limit=${limit}`);
		}
	};

	return (
		<Pagination>
			<PaginationContent className="mt-4 flex w-full items-center justify-center py-2">
				<PaginationItem>
					<PaginationButton
						action={() => console.log("teste")}
						Icon={ChevronsLeft}
						currentPage={currentPage}
						pageNumber={1}
						disabled={currentPage === 1}
					/>
				</PaginationItem>

				<PaginationItem>
					<PaginationButton
						action={() => console.log("teste")}
						Icon={ChevronLeft}
						currentPage={currentPage}
						pageNumber={1}
						disabled={currentPage === 1}
					/>
				</PaginationItem>

				{pages.map((item) => {
					return (
						<PaginationButton
							action={() => console.log("teste")}
							text={item.label.toString()}
							key={item.page}
							isActive={currentPage === item.page}
						/>
					);
				})}

				<PaginationItem>
					<PaginationButton
						action={() => console.log("teste")}
						Icon={ChevronRight}
						currentPage={currentPage}
						pageNumber={1}
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationButton
						action={handleLastPage}
						Icon={ChevronsRight}
						currentPage={currentPage}
						pageNumber={1}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};
