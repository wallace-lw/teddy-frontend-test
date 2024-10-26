import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { CustomerSchema, customerSchema } from "../../schemas/customer-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../ErrorMessage";
import { cn } from "@/lib/utils";
import { createUser } from "@/services/createUser";
import { useState } from "react";

export const CreateCustomerDialog = () => {
	const [dialogIsOpen, setDialogIsOpen] = useState(false);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<CustomerSchema>({
		resolver: zodResolver(customerSchema),
	});

	const handleDialogOpening = () => {
		setDialogIsOpen((prev) => !prev);
	};

	const onSubmit = async (data: CustomerSchema) => {
		await createUser({
			companyValuation: Number(data.companyValuation),
			name: data.name,
			salary: Number(data.salary),
		});
		setDialogIsOpen(false);
	};

	return (
		<Dialog open={dialogIsOpen} onOpenChange={handleDialogOpening}>
			<DialogTrigger>
				<Button className="bg-transparent border border-teddy-orange text-teddy-orange font-semibold w-full lg:w-[200px] hover:bg-teddy-orange hover:text-white transition-all">
					<PlusCircle />
					Novo cliente
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Novo cliente</DialogTitle>
				</DialogHeader>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					<Input
						type="text"
						placeholder="Digite o nome:"
						autoComplete="off"
						{...register("name")}
						className={cn(
							"h-12 px-2  border-teddy-gray-primary  placeholder:text-teddy-gray-secondary",
							errors.name?.message
								? "focus-visible:ring-red-700"
								: "focus-visible:ring-teddy-orange",
						)}
					/>
					{errors.name?.message && (
						<ErrorMessage message={errors.name.message} />
					)}
					<Input
						type="text"
						placeholder="Digite o salário:"
						autoComplete="off"
						{...register("salary")}
						className={cn(
							"h-12 px-2  border-teddy-gray-primary  placeholder:text-teddy-gray-secondary",
							errors.name?.message
								? "focus-visible:ring-red-700"
								: "focus-visible:ring-teddy-orange",
						)}
					/>
					{errors.salary?.message && (
						<ErrorMessage message={errors.salary.message} />
					)}
					<Input
						type="text"
						placeholder="Digite o valor da empresa:"
						autoComplete="off"
						{...register("companyValuation")}
						className={cn(
							"h-12 px-2  border-teddy-gray-primary  placeholder:text-teddy-gray-secondary",
							errors.name?.message
								? "focus-visible:ring-red-700"
								: "focus-visible:ring-teddy-orange",
						)}
					/>
					{errors.companyValuation?.message && (
						<ErrorMessage message={errors.companyValuation.message} />
					)}
					<Button
						className="bg-teddy-orange text-white font-semibold"
						type="submit"
					>
						Criar cliente
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};
