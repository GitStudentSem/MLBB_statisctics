import type { IBattle } from "../gamesInfo";

const myTeam: IBattle["myTeam"] = [
	{
		heroName: "Tigreal",
		kda: { kill: 2, death: 3, help: 19 },
		class: { points: 8.7, icon: "Золото" },
	},
	{
		heroName: "Harith",
		kda: { kill: 7, death: 4, help: 8 },
		class: { points: 8.2, icon: "Серебро" },
	},
	{
		heroName: "Clint",
		kda: { kill: 10, death: 2, help: 6 },
		class: { points: 9.4, icon: "МВП победившей команды" },
	},
	{
		heroName: "Terizla",
		kda: { kill: 4, death: 5, help: 12 },
		class: { points: 7.8, icon: "Серебро" },
	},
	{
		heroName: "Nolan",
		kda: { kill: 8, death: 4, help: 9 },
		class: { points: 8.9, icon: "Золото" },
	},
];

const enemyTeam: IBattle["enemyTeam"] = [
	{
		heroName: "Franco",
		kda: { kill: 1, death: 8, help: 7 },
		class: { points: 4.5, icon: "Шоколад" },
	},
	{
		heroName: "Lylia",
		kda: { kill: 5, death: 7, help: 4 },
		class: { points: 6.2, icon: "Серебро" },
	},
	{
		heroName: "Brody",
		kda: { kill: 6, death: 6, help: 3 },
		class: { points: 6.9, icon: "Серебро" },
	},
	{
		heroName: "Yu Zhong",
		kda: { kill: 3, death: 9, help: 5 },
		class: { points: 5.1, icon: "Шоколад" },
	},
	{
		heroName: "Fanny",
		kda: { kill: 11, death: 5, help: 2 },
		class: { points: 9.1, icon: "МВП проигравей команды" },
	},
];

export const defaultBattleValues: IBattle = {
	win: true,
	date: new Date("2026-03-15"),
	battleTime: 1020,
	myHero: {
		heroName: "Tigreal",
		kda: { kill: 2, death: 3, help: 19 },
		class: { points: 8.7, icon: "Золото" },
	},
	myTeam,
	enemyTeam,
	score: {
		myTeam: 31,
		enemyTeam: 26,
	},
	rang: {
		prev: {
			rangName: "Легенда",
			rangNumber: 5,
			stars: 2,
		},
		now: {
			rangName: "Легенда",
			rangNumber: 4,
			stars: 0,
		},
		starsDifference: 1,
	},
};
