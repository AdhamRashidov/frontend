export const formatter = (value) => {
	return new Intl.NumberFormat("uz-Uz").format(value);
};