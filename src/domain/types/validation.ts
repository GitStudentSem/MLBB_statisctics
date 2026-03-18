export type ValidationIssue = {
	field: string;
	message: string;
	severity?: "error" | "warning";
};

export type ValidationResult = {
	isValid: boolean;
	issues: ValidationIssue[];
};
