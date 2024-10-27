import { CustomerCard } from "@/components";
import { Button } from "@/components/ui/button";
import { useSelectedCustomers } from "@/hooks/useSelectedCustomers";
import { MainLayout } from "@/layouts";

export const SelectedCustomers = () => {
	const { selectedCustomers, handleClearSelection, handleDeselectCustomer } =
		useSelectedCustomers();

	return (
		<MainLayout>
			{selectedCustomers.length === 0 && (
				<div className="w-full mt-20 flex justify-center items-center">
					<h1 className="text-2xl text-teddy-orange font-bold ">
						Não há clientes selecionados...
					</h1>
				</div>
			)}

			{selectedCustomers.length > 0 && (
				<div className="w-full flex flex-col justify-center items-center mt-10 px-10 md:px-20 pb-10  gap-6">
					<div className="w-full flex items-center justify-center font-semibold gap-1">
						<span className="text-teddy-orange font-semibold text-xl">
							{selectedCustomers.length} clientes selecionados
						</span>
					</div>
					<div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center">
						{selectedCustomers.map((customer) => (
							<CustomerCard
								key={customer.id}
								companyValuation={customer.companyValuation}
								id={customer.id}
								name={customer.name}
								salary={customer.salary}
								isSelected={selectedCustomers.some(
									(selectedCustomer) => selectedCustomer.id === customer.id,
								)}
								handleDeselectCustomer={() => handleDeselectCustomer(customer)}
							/>
						))}
					</div>
					<Button
						onClick={handleClearSelection}
						className="border border-teddy-orange w-full bg-transparent text-teddy-orange hover:bg-teddy-orange hover:text-white transition-all"
					>
						Limpar clientes
					</Button>
				</div>
			)}
		</MainLayout>
	);
};
