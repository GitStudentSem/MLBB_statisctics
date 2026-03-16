import { type HeroesNameType, heroes } from "./heroesNames";

export interface IKDA {
	/**
	 * @description Количество убийств
	 * @min 0
	 */
	kill: number;

	/**
	 * @description Количество смертей
	 * @min 0
	 */
	death: number;

	/**
	 * @description Количество помощи
	 * @min 0
	 */
	help: number;
}

export interface IRangInfo {
	/**
	 * @description Имя ранга, например Легенда 3
	 * @min 0
	 */
	rangName: "Эпик" | "Легенда" | "Мифик";
	/**
	 * @description Номер ранга, например Легенда 3
	 * @min 0
	 */
	rangNumber: 1 | 2 | 3 | 4 | 5;

	/**
	 * @description Сколько звезд на данном этапе
	 * @min 0
	 */
	stars: number;
}

export interface IHeroInfo {
	/**
	 * @description Имя героя
	 */
	heroName: HeroesNameType;

	/**
	 * @description Статистика героя: убийства / смерти / помощь
	 * @min 0
	 */
	kda: IKDA;

	/**
	 * @description Класс игры в матче
	 * @min 3.0
	 * @info Всегда отображается в виде десятичной дроби
	 */
	class: {
		points: number;
		icon:
			| "Шоколад"
			| "Серебро"
			| "Золото"
			| "МВП победившей команды"
			| "МВП проигравей команды";
	};
}

export interface IBattle {
	/**
	 * @description Победа или поражение
	 */
	win: boolean;

	/**
	 * @description Дата игры
	 */
	date: Date;

	/**
	 * @description Время битвы
	 */
	battleTime: number;

	/**
	 * @description Информация о моей статистике
	 */
	myHero: IHeroInfo;

	/**
	 * @description Информация о статистике вражеских героев
	 */
	enemyTeam: [IHeroInfo, IHeroInfo, IHeroInfo, IHeroInfo, IHeroInfo];

	/**
	 * @description Информация о статистике союзных героев
	 */
	myTeam: [IHeroInfo, IHeroInfo, IHeroInfo, IHeroInfo, IHeroInfo];

	/**
	 * @description Счет игры
	 */
	score: {
		/**
		 * @description Количество очков убийств моей команды
		 */
		myTeam: number;

		/**
		 * @description Количество очков убийств вражеской команды
		 */
		enemyTeam: number;
	};

	/**
	 * @description Информация о ранге
	 */
	rang: {
		/**
		 * @description Сколько звезд я получил за игру
		 */
		starsDifference: -1 | 0 | 1;
	};
}

/**
 * @description Стартовый ранг аккаунта для отсчета прогресса
 */
export const accountStartingRang: IRangInfo = {
	rangName: "Легенда",
	rangNumber: 5,
	stars: 2,
};

export const battls: IBattle[] = [
	{
		win: true,
		date: new Date("2026-03-16"),
		battleTime: 60 * 23 + 6,
		myHero: {
			heroName: heroes.belerik.name,
			kda: { kill: 9, death: 6, help: 17 },
			class: { points: 10.9, icon: "МВП победившей команды" },
		},
		myTeam: [
			{
				heroName: heroes.hanabi.name,
				kda: { kill: 6, death: 11, help: 14 },
				class: { points: 7.3, icon: "Золото" },
			},
			{
				heroName: heroes.gossen.name,
				kda: { kill: 12, death: 12, help: 7 },
				class: { points: 5.7, icon: "Серебро" },
			},
			{
				heroName: heroes.belerik.name,
				kda: { kill: 9, death: 6, help: 17 },
				class: { points: 10.9, icon: "МВП победившей команды" },
			},
			{
				heroName: heroes.gvinevra.name,
				kda: { kill: 5, death: 10, help: 12 },
				class: { points: 6.4, icon: "Серебро" },
			},
			{
				heroName: heroes.sicilion.name,
				kda: { kill: 6, death: 5, help: 17 },
				class: { points: 0, icon: "Золото" },
			},
		],
		enemyTeam: [
			{
				heroName: heroes.miya.name,
				kda: { kill: 14, death: 11, help: 5 },
				class: { points: 7.1, icon: "Золото" },
			},
			{
				heroName: heroes.veil.name,
				kda: { kill: 14, death: 5, help: 14 },
				class: { points: 11.7, icon: "МВП проигравей команды" },
			},
			{
				heroName: heroes.badang.name,
				kda: { kill: 6, death: 9, help: 11 },
				class: { points: 6.7, icon: "Серебро" },
			},
			{
				heroName: heroes.alisa.name,
				kda: { kill: 7, death: 7, help: 14 },
				class: { points: 7.9, icon: "Золото" },
			},
			{
				heroName: heroes.angela.name,
				kda: { kill: 3, death: 6, help: 8 },
				class: { points: 4.8, icon: "Серебро" },
			},
		],
		score: {
			myTeam: 38,
			enemyTeam: 44,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: false,
		date: new Date("2026-03-17"),
		battleTime: 60 * 11 + 31,
		myHero: {
			heroName: heroes.lolita.name,
			kda: { kill: 2, death: 3, help: 7 },
			class: { points: 7.9, icon: "Золото" },
		},
		myTeam: [
			{
				heroName: heroes.eymon.name,
				kda: { kill: 3, death: 4, help: 1 },
				class: { points: 4.4, icon: "Серебро" },
			},
			{
				heroName: heroes.terizla.name,
				kda: { kill: 6, death: 4, help: 3 },
				class: { points: 8.4, icon: "МВП проигравей команды" },
			},
			{
				heroName: heroes.miya.name,
				kda: { kill: 2, death: 7, help: 1 },
				class: { points: 3.0, icon: "Шоколад" },
			},
			{
				heroName: heroes.lolita.name,
				kda: { kill: 2, death: 3, help: 7 },
				class: { points: 7.9, icon: "Золото" },
			},
			{
				heroName: heroes.nana.name,
				kda: { kill: 2, death: 4, help: 3 },
				class: { points: 5.5, icon: "Серебро" },
			},
		],
		enemyTeam: [
			{
				heroName: heroes.bein.name,
				kda: { kill: 3, death: 7, help: 3 },
				class: { points: 4.7, icon: "Серебро" },
			},
			{
				heroName: heroes.estes.name,
				kda: { kill: 1, death: 3, help: 14 },
				class: { points: 8.8, icon: "Золото" },
			},
			{
				heroName: heroes.ksavier.name,
				kda: { kill: 4, death: 0, help: 10 },
				class: { points: 10.3, icon: "Золото" },
			},
			{
				heroName: heroes.helcart.name,
				kda: { kill: 3, death: 4, help: 5 },
				class: { points: 5.7, icon: "Серебро" },
			},
			{
				heroName: heroes.moskov.name,
				kda: { kill: 11, death: 1, help: 8 },
				class: { points: 13.0, icon: "МВП победившей команды" },
			},
		],
		score: {
			myTeam: 15,
			enemyTeam: 22,
		},
		rang: {
			starsDifference: -1,
		},
	},
];
