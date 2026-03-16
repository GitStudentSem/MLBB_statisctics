import type { IHeroInfo } from "../gamesInfo";
import { parseHero } from "./heroParser";

const parseFiveHeroes = (
	formData: FormData,
	teamKey: "myTeam" | "enemyTeam",
): [IHeroInfo, IHeroInfo, IHeroInfo, IHeroInfo, IHeroInfo] => {
	return [0, 1, 2, 3, 4].map((index) =>
		parseHero(formData, `${teamKey}[${index}]`),
	) as [IHeroInfo, IHeroInfo, IHeroInfo, IHeroInfo, IHeroInfo];
};

export const parseMyTeam = (formData: FormData) => parseFiveHeroes(formData, "myTeam");

export const parseEnemyTeam = (formData: FormData) =>
	parseFiveHeroes(formData, "enemyTeam");
