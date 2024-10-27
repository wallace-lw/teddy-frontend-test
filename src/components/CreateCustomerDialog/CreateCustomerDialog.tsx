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
import { CustomerSchema, customerSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/components";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import { useCreateCustomer } from "@/hooks";
import { onlyNumberCurrencyMask } from "@/utils";

export const CreateCustomerDialog = () => {
	const [dialogIsOpen, setDialogIsOpen] = useState(false);

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<CustomerSchema>({
		resolver: zodResolver(customerSchema),
	});

	const handleDialogOpening = () => {
		setDialogIsOpen((prev) => !prev);
	};

	const { mutate } = useCreateCustomer();

	const onSubmit = async (data: CustomerSchema) => {
		mutate(data);
		setDialogIsOpen(false);
		reset();
	};

	const handleOnlyNumberCurrencyMask = useCallback(onlyNumberCurrencyMask, []);

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
						onKeyUp={handleOnlyNumberCurrencyMask}
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
						onKeyUp={handleOnlyNumberCurrencyMask}
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
