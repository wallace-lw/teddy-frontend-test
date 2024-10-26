import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { useDeleteCustomer } from "@/hooks/useDeleteCustomer";

interface IProps {
	name: string;
	id: number;
}

export const DeleteCustomerDialog: React.FC<IProps> = ({ name, id }) => {
	const { mutate } = useDeleteCustomer(id);

	const handleDeleteUser = async () => {
		mutate();
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Button className="bg-transparent text-red-700 p-0">
					<Trash />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Excluir cliente: {name}</AlertDialogTitle>
					<AlertDialogDescription>
						Esta ação não pode ser desfeita, tem certeza que quer excluir?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="border border-teddy-orange text-teddy-orange">
						Cancelar
					</AlertDialogCancel>
					<AlertDialogAction
						className="bg-teddy-orange font-semibold"
						onClick={handleDeleteUser}
					>
						Excluir
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
