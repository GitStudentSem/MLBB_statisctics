import type { IBattle } from "../gamesInfo";
import { readEnumField } from "./formValueReaders";

const starsDifferenceValues = [-1, 0, 1] as const;

export const parseRang = (formData: FormData): IBattle["rang"] => {
	return {
		starsDifference: readEnumField(
			formData,
			"rang.starsDifference",
			starsDifferenceValues,
		),
	};
};
