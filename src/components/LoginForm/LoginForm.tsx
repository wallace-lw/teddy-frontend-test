import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { loginSchema, LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../ErrorMessage";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/contexts";

export const LoginForm: React.FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const { handleUsername } = useAuthContext();

	const navigate = useNavigate();

	const onSubmit = (data: LoginSchema) => {
		handleUsername(data.name);
		navigate("/clientes");
	};

	return (
		<form
			className="w-96 flex flex-col gap-4 p-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className="text-center text-3xl">Olá, seja bem-vindo!</h1>
			<Input
				type="text"
				placeholder="Digite seu nome:"
				className={cn(
					"h-12 px-2  border-teddy-gray-primary  placeholder:text-teddy-gray-secondary",
					errors.name?.message
						? "focus-visible:ring-red-700"
						: "focus-visible:ring-teddy-orange",
				)}
				{...register("name")}
			/>
			{errors.name?.message && <ErrorMessage message={errors.name.message} />}
			<Button
				variant={"default"}
				className="bg-teddy-orange text-white rounded-sm w-full font-semibold hover:bg-teddy-orange/85"
			>
				Entrar
			</Button>
		</form>
	);
};
