import type { IHeroInfo } from "../gamesInfo";
import { readEnumField, readNumberField, readStringField } from "./formValueReaders";

const classIcons = [
	"Шоколад",
	"Серебро",
	"Золото",
	"МВП победившей команды",
	"МВП проигравей команды",
] as const;

export const parseHero = (formData: FormData, prefix: string): IHeroInfo => {
	return {
		heroName: readStringField(formData, `${prefix}.heroName`),
		kda: {
			kill: readNumberField(formData, `${prefix}.kda.kill`),
			death: readNumberField(formData, `${prefix}.kda.death`),
			help: readNumberField(formData, `${prefix}.kda.help`),
		},
		class: {
			points: readNumberField(formData, `${prefix}.class.points`, 3),
			icon: readEnumField(formData, `${prefix}.class.icon`, classIcons),
		},
	};
};
