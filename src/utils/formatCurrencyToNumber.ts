export const formatCurrencyToNumber = (currency: string): number => {
	const numericValue = currency.replace(/[^0-9,]/g, "").replace(",", ".");

	return Number.parseFloat(numericValue) || 0;
};
