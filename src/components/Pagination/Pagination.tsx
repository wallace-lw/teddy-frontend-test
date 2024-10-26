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
			searchParams.set("page", String(totalPages));
			navigate(`/clientes?page=${totalPages}&limit=${limit}`);
			// window.location.reload();
		}
	};

	const handleFirstPage = () => {
		if (currentPage === 1) return;
		searchParams.set("page", String(1));
		navigate(`/clientes?page=1&limit=${limit}`);
		// window.location.reload();
	};

	const handleButtonNavigation = (page: number) => {
		if (currentPage === page) return;
		searchParams.set("page", String(page));
		navigate(`/clientes?page=${page}&limit=${limit}`);
		// window.location.reload();
	};

	const handleNextPage = () => {
		if (currentPage === totalPages) return;
		searchParams.set("page", String(currentPage + 1));
		navigate(`/clientes?page=${currentPage + 1}&limit=${limit}`);
		// window.location.reload();
	};

	const handlePreviousPage = () => {
		if (currentPage === 1) return;
		searchParams.set("page", String(currentPage - 1));
		navigate(`/clientes?page=${currentPage - 1}&limit=${limit}`);
		// window.location.reload();
	};

	return (
		<Pagination>
			<PaginationContent className="mt-4 flex w-full items-center justify-center py-2">
				<PaginationItem>
					<PaginationButton
						action={handleFirstPage}
						Icon={ChevronsLeft}
						currentPage={currentPage}
						pageNumber={1}
						disabled={currentPage === 1}
					/>
				</PaginationItem>

				<PaginationItem>
					<PaginationButton
						action={handlePreviousPage}
						Icon={ChevronLeft}
						currentPage={currentPage}
						pageNumber={1}
						disabled={currentPage === 1}
					/>
				</PaginationItem>

				{pages.map((item) => {
					return (
						<PaginationButton
							action={() => handleButtonNavigation(item.page)}
							text={item.label.toString()}
							key={item.page}
							isActive={currentPage === item.page}
						/>
					);
				})}

				<PaginationItem>
					<PaginationButton
						action={handleNextPage}
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
