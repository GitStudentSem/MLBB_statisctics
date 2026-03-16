import type { IBattle } from "../gamesInfo";
import { heroes } from "../heroesNames";

const myTeam: IBattle["myTeam"] = [
	{
		heroName: heroes.tigril.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "Золото" },
	},
	{
		heroName: heroes.harit.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "Серебро" },
	},
	{
		heroName: heroes.clint.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "МВП победившей команды" },
	},
	{
		heroName: heroes.terizla.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "Серебро" },
	},
	{
		heroName: heroes.nolan.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "Золото" },
	},
];

const enemyTeam: IBattle["enemyTeam"] = [
	{
		heroName: heroes.franko.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "Шоколад" },
	},
	{
		heroName: heroes.liliya.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "Серебро" },
	},
	{
		heroName: heroes.brody.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "Серебро" },
	},
	{
		heroName: heroes.liSunSin.name,
		kda: { kill: 3, death: 0, help: 0 },
		class: { points: 0, icon: "Шоколад" },
	},
	{
		heroName: heroes.fanny.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "МВП проигравей команды" },
	},
];

export const defaultBattleValues: IBattle = {
	win: true,
	date: new Date("2026-03-15"),
	battleTime: 0,
	myHero: {
		heroName: heroes.tigril.name,
		kda: { kill: 0, death: 0, help: 0 },
		class: { points: 0, icon: "Золото" },
	},
	myTeam,
	enemyTeam,
	score: {
		myTeam: 0,
		enemyTeam: 0,
	},
	rang: {
		starsDifference: 0,
	},
};
