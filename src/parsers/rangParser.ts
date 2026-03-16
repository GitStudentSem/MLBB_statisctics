import type { IBattle, IRangInfo } from "../gamesInfo";
import { readEnumField, readNumberField } from "./formValueReaders";

const rangNames = ["Эпик", "Легенда", "Мифик"] as const;
const rangNumbers = [1, 2, 3, 4, 5] as const;
const starsDifferenceValues = [-1, 0, 1] as const;

const parseRangInfo = (formData: FormData, prefix: string): IRangInfo => {
	return {
		rangName: readEnumField(formData, `${prefix}.rangName`, rangNames),
		rangNumber: readEnumField(formData, `${prefix}.rangNumber`, rangNumbers),
		stars: readNumberField(formData, `${prefix}.stars`),
	};
};

export const parseRang = (formData: FormData): IBattle["rang"] => {
	return {
		prev: parseRangInfo(formData, "rang.prev"),
		now: parseRangInfo(formData, "rang.now"),
		starsDifference: readEnumField(
			formData,
			"rang.starsDifference",
			starsDifferenceValues,
		),
	};
};
