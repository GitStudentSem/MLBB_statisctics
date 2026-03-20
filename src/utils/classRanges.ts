import type { IHeroInfo } from "../gamesInfo";
import { battls } from "../gamesInfo";

type ClassIcon = IHeroInfo["class"]["icon"];

type ClassPointsRange = {
	min: number;
	max: number;
};

type ClassRanges = Record<ClassIcon, ClassPointsRange | null>;

const ALL_ICONS: ClassIcon[] = ["Шоколад", "Серебро", "Золото"];

export function calculateClassPointRanges(): ClassRanges {
	const pointsByIcon: Record<ClassIcon, number[]> = {
		Шоколад: [],
		Серебро: [],
		Золото: [],
		"МВП победившей команды": [],
		"МВП проигравшей команды": [],
	};

	for (const battle of battls) {
		const allHeroes = [...battle.myTeam, ...battle.enemyTeam];

		for (const hero of allHeroes) {
			if (
				hero.class.icon === "МВП победившей команды" ||
				hero.class.icon === "МВП проигравшей команды"
			) {
				pointsByIcon["Золото"].push(hero.class.points);
				continue;
			}
			pointsByIcon[hero.class.icon].push(hero.class.points);
		}
	}

	const result = {} as ClassRanges;

	for (const icon of ALL_ICONS) {
		const points = pointsByIcon[icon];

		result[icon] =
			points.length === 0
				? null
				: {
						min: Math.min(...points),
						max: Math.max(...points),
					};
	}
	console.log("result", result);
	return result;
}
