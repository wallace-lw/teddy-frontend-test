export const onlyNumberCurrencyMask = (
	event: React.FormEvent<HTMLInputElement>,
) => {
	let value = event.currentTarget.value;

	value = value.replace(/\D/g, "");

	value = (Number(value) / 100).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	event.currentTarget.value = value;
};
