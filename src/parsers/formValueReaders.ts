const getRawValue = (
	formData: FormData,
	fieldName: string,
): FormDataEntryValue => {
	const value = formData.get(fieldName);
	if (value === null) {
		throw new Error(`Поле "${fieldName}" не найдено`);
	}
	return value;
};

export const readStringField = (
	formData: FormData,
	fieldName: string,
): string => {
	const rawValue = getRawValue(formData, fieldName);
	if (typeof rawValue !== "string") {
		throw new Error(`Поле "${fieldName}" имеет неверный тип`);
	}

	const value = rawValue.trim();
	if (!value) {
		throw new Error(`Поле "${fieldName}" не может быть пустым`);
	}

	return value;
};

export const readNumberField = (
	formData: FormData,
	fieldName: string,
	minValue = 0,
): number => {
	const value = Number(readStringField(formData, fieldName));
	if (Number.isNaN(value)) {
		throw new Error(`Поле "${fieldName}" должно быть числом`);
	}
	if (value < minValue) {
		throw new Error(`Поле "${fieldName}" должно быть >= ${minValue}`);
	}
	return value;
};

export const readDateField = (formData: FormData, fieldName: string): Date => {
	const dateString = readStringField(formData, fieldName);
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) {
		throw new Error(`Поле "${fieldName}" должно содержать корректную дату`);
	}
	return date;
};

export const readEnumField = <TValue extends string | number>(
	formData: FormData,
	fieldName: string,
	allowedValues: readonly TValue[],
): TValue => {
	const value = readStringField(formData, fieldName);
	const normalizedAllowedValues = allowedValues.map(String);
	if (!normalizedAllowedValues.includes(value)) {
		throw new Error(
			`Поле "${fieldName}" имеет недопустимое значение "${value}"`,
		);
	}

	const index = normalizedAllowedValues.indexOf(value);
	return allowedValues[index];
};

export const readBooleanField = (
	formData: FormData,
	fieldName: string,
): boolean => {
	return (
		readEnumField(formData, fieldName, ["true", "false"] as const) === "true"
	);
};
