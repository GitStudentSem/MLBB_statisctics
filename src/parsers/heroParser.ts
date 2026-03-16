import type { IHeroInfo } from "../gamesInfo";
import { heroes, type HeroesNameType } from "../heroesNames";
import { readEnumField, readNumberField } from "./formValueReaders";

const classIcons = [
	"Шоколад",
	"Серебро",
	"Золото",
	"МВП победившей команды",
	"МВП проигравей команды",
] as const;

const heroNames = Object.values(heroes).map(
	(hero): HeroesNameType => hero.name,
);

export const parseHero = (formData: FormData, prefix: string): IHeroInfo => {
	return {
		heroName: readEnumField(formData, `${prefix}.heroName`, heroNames),
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
