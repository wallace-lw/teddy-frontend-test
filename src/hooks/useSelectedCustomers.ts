import { ICustomer } from "@/interfaces";
import { useEffect, useState } from "react";

export const useSelectedCustomers = () => {
	const [selectedCustomers, setSelectedCustomers] = useState<ICustomer[]>([]);

	const savedSelectedCustomers = localStorage.getItem("selectedCustomers");

	const handleSelectCustomer = (customer: ICustomer) => {
		setSelectedCustomers((prevCustomers) => {
			const isCustomerSelected = prevCustomers.some(
				(selectedCustomer) => selectedCustomer.id === customer.id,
			);

			if (!isCustomerSelected) {
				const updatedCustomers = [...prevCustomers, customer];
				localStorage.setItem(
					"selectedCustomers",
					JSON.stringify(updatedCustomers),
				);
				return updatedCustomers;
			}

			return prevCustomers;
		});
	};

	const handleDeselectCustomer = (customer: ICustomer) => {
		setSelectedCustomers((prevCustomers) => {
			const updatedCustomers = prevCustomers.filter(
				(selectedCustomer) => selectedCustomer.id !== customer.id,
			);

			localStorage.setItem(
				"selectedCustomers",
				JSON.stringify(updatedCustomers),
			);

			return updatedCustomers;
		});
	};

	const handleClearSelection = () => {
		setSelectedCustomers([]);
		localStorage.removeItem("selectedCustomers");
	};

	useEffect(() => {
		if (savedSelectedCustomers) {
			setSelectedCustomers(JSON.parse(savedSelectedCustomers));
		}
	}, [savedSelectedCustomers]);

	return {
		selectedCustomers,
		handleSelectCustomer,
		handleDeselectCustomer,
		handleClearSelection,
	};
};
