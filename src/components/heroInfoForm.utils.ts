import type { IHeroInfo } from "../gamesInfo";
import { type HeroesNameType, heroes } from "../heroesNames";

export type HeroInfoFormState = {
	heroName: HeroesNameType;
	kill: number;
	death: number;
	help: number;
	classPoints: number;
	classIcon: IHeroInfo["class"]["icon"];
};

export const classIcons: Array<IHeroInfo["class"]["icon"]> = [
	"Шоколад",
	"Серебро",
	"Золото",
	"МВП победившей команды",
	"МВП проигравшей команды",
];

export function createDefaultHeroInfo(
	heroName: HeroesNameType,
): HeroInfoFormState {
	return {
		heroName,
		kill: 0,
		death: 0,
		help: 0,
		classPoints: 3,
		classIcon: "Серебро",
	};
}

export function mapHeroFormToHeroInfo(formState: HeroInfoFormState): IHeroInfo {
	return {
		heroName: formState.heroName,
		kda: {
			kill: formState.kill,
			death: formState.death,
			help: formState.help,
		},
		class: {
			points: formState.classPoints,
			icon: formState.classIcon,
		},
	};
}

export const heroNames = Object.values(heroes).map(
	(hero) => hero.name,
) as HeroesNameType[];

export const defaultHeroName = heroNames[0];
