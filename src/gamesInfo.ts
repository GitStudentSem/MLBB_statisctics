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
			heroName: heroes.belerick.name,
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
				heroName: heroes.gusion.name,
				kda: { kill: 12, death: 12, help: 7 },
				class: { points: 5.7, icon: "Серебро" },
			},
			{
				heroName: heroes.belerick.name,
				kda: { kill: 9, death: 6, help: 17 },
				class: { points: 10.9, icon: "МВП победившей команды" },
			},
			{
				heroName: heroes.guinevere.name,
				kda: { kill: 5, death: 10, help: 12 },
				class: { points: 6.4, icon: "Серебро" },
			},
			{
				heroName: heroes.cecillion.name,
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
				heroName: heroes.vale.name,
				kda: { kill: 14, death: 5, help: 14 },
				class: { points: 11.7, icon: "МВП проигравей команды" },
			},
			{
				heroName: heroes.badang.name,
				kda: { kill: 6, death: 9, help: 11 },
				class: { points: 6.7, icon: "Серебро" },
			},
			{
				heroName: heroes.alice.name,
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
				heroName: heroes.aamon.name,
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
				heroName: heroes.bane.name,
				kda: { kill: 3, death: 7, help: 3 },
				class: { points: 4.7, icon: "Серебро" },
			},
			{
				heroName: heroes.estes.name,
				kda: { kill: 1, death: 3, help: 14 },
				class: { points: 8.8, icon: "Золото" },
			},
			{
				heroName: heroes.xavier.name,
				kda: { kill: 4, death: 0, help: 10 },
				class: { points: 10.3, icon: "Золото" },
			},
			{
				heroName: heroes.helcurt.name,
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
	{
		win: true,
		date: new Date("2026-03-17"),
		battleTime: 60 * 18 + 14,
		myHero: {
			heroName: heroes.belerick.name,
			kda: { kill: 4, death: 4, help: 22 },
			class: { points: 10.9, icon: "МВП победившей команды" },
		},
		myTeam: [
			{
				heroName: heroes.gord.name,
				kda: { kill: 16, death: 8, help: 6 },
				class: { points: 8.5, icon: "Золото" },
			},
			{
				heroName: heroes.belerick.name,
				kda: { kill: 4, death: 4, help: 22 },
				class: { points: 10.9, icon: "МВП победившей команды" },
			},
			{
				heroName: heroes.suyou.name,
				kda: { kill: 5, death: 5, help: 14 },
				class: { points: 7.8, icon: "Золото" },
			},
			{
				heroName: heroes.clint.name,
				kda: { kill: 9, death: 8, help: 4 },
				class: { points: 6.7, icon: "Серебро" },
			},
			{
				heroName: heroes.silvanna.name,
				kda: { kill: 7, death: 6, help: 7 },
				class: { points: 6.5, icon: "Серебро" },
			},
		],
		enemyTeam: [
			{
				heroName: heroes.badang.name,
				kda: { kill: 4, death: 6, help: 15 },
				class: { points: 8.8, icon: "МВП проигравей команды" },
			},
			{
				heroName: heroes.hanabi.name,
				kda: { kill: 4, death: 9, help: 8 },
				class: { points: 5.9, icon: "Серебро" },
			},
			{
				heroName: heroes.harley.name,
				kda: { kill: 12, death: 7, help: 4 },
				class: { points: 7.2, icon: "Золото" },
			},
			{
				heroName: heroes.selena.name,
				kda: { kill: 4, death: 9, help: 5 },
				class: { points: 4.4, icon: "Серебро" },
			},
			{
				heroName: heroes.gusion.name,
				kda: { kill: 7, death: 10, help: 8 },
				class: { points: 5.7, icon: "Серебро" },
			},
		],
		score: {
			myTeam: 41,
			enemyTeam: 31,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: true,
		date: new Date("2026-03-17"),
		battleTime: 60 * 10 + 25,
		myHero: {
			heroName: heroes.minotaur.name,
			kda: { kill: 2, death: 3, help: 20 },
			class: { points: 11.1, icon: "Золото" },
		},
		myTeam: [
			{
				heroName: heroes.thamuz.name,
				kda: { kill: 6, death: 1, help: 7 },
				class: { points: 8.9, icon: "Золото" },
			},
			{
				heroName: heroes.minotaur.name,
				kda: { kill: 2, death: 3, help: 20 },
				class: { points: 11.1, icon: "Золото" },
			},
			{
				heroName: heroes.karrie.name,
				kda: { kill: 14, death: 1, help: 6 },
				class: { points: 11.7, icon: "МВП победившей команды" },
			},
			{
				heroName: heroes.saber.name,
				kda: { kill: 5, death: 4, help: 10 },
				class: { points: 7.9, icon: "Золото" },
			},
			{
				heroName: heroes.change.name,
				kda: { kill: 8, death: 1, help: 16 },
				class: { points: 11.4, icon: "Золото" },
			},
		],
		enemyTeam: [
			{
				heroName: heroes.freya.name,
				kda: { kill: 5, death: 6, help: 2 },
				class: { points: 5.8, icon: "Серебро" },
			},
			{
				heroName: heroes.granger.name,
				kda: { kill: 0, death: 6, help: 2 },
				class: { points: 3.0, icon: "Шоколад" },
			},
			{
				heroName: heroes.vexana.name,
				kda: { kill: 4, death: 5, help: 3 },
				class: { points: 5.6, icon: "Серебро" },
			},
			{
				heroName: heroes.paquito.name,
				kda: { kill: 0, death: 8, help: 4 },
				class: { points: 3.0, icon: "Шоколад" },
			},
			{
				heroName: heroes.kalea.name,
				kda: { kill: 1, death: 10, help: 6 },
				class: { points: 4.7, icon: "Серебро" },
			},
		],
		score: {
			myTeam: 35,
			enemyTeam: 10,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: true,
		date: new Date("2026-03-17"),
		battleTime: 60 * 13 + 8,
		myHero: {
			heroName: heroes.belerick.name,
			kda: { kill: 7, death: 2, help: 19 },
			class: { points: 12.0, icon: "МВП победившей команды" },
		},
		myTeam: [
			{
				heroName: heroes.nana.name,
				kda: { kill: 6, death: 3, help: 10 },
				class: { points: 8.6, icon: "Золото" },
			},
			{
				heroName: heroes.belerick.name,
				kda: { kill: 7, death: 2, help: 19 },
				class: { points: 12.0, icon: "МВП победившей команды" },
			},
			{
				heroName: heroes.paquito.name,
				kda: { kill: 11, death: 5, help: 7 },
				class: { points: 9.0, icon: "Золото" },
			},
			{
				heroName: heroes.lesley.name,
				kda: { kill: 6, death: 4, help: 4 },
				class: { points: 6.7, icon: "Серебро" },
			},
			{
				heroName: heroes.zilong.name,
				kda: { kill: 5, death: 1, help: 7 },
				class: { points: 8.4, icon: "Золото" },
			},
		],
		enemyTeam: [
			{
				heroName: heroes.dyrroth.name,
				kda: { kill: 3, death: 8, help: 1 },
				class: { points: 3.4, icon: "Серебро" },
			},
			{
				heroName: heroes.ixia.name,
				kda: { kill: 2, death: 6, help: 2 },
				class: { points: 4.4, icon: "Серебро" },
			},
			{
				heroName: heroes.helcurt.name,
				kda: { kill: 6, death: 4, help: 3 },
				class: { points: 8.0, icon: "МВП проигравей команды" },
			},
			{
				heroName: heroes.zetian.name,
				kda: { kill: 0, death: 10, help: 5 },
				class: { points: 3.3, icon: "Шоколад" },
			},
			{
				heroName: heroes.freya.name,
				kda: { kill: 4, death: 7, help: 3 },
				class: { points: 5.5, icon: "Серебро" },
			},
		],
		score: {
			myTeam: 35,
			enemyTeam: 15,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: true,
		date: new Date("2026-03-17"),
		battleTime: 60 * 14 + 58,
		myHero: {
			heroName: heroes.belerick.name,
			kda: { kill: 3, death: 9, help: 16 },
			class: { points: 7.4, icon: "Золото" },
		},
		myTeam: [
			{
				heroName: heroes.moskov.name,
				kda: { kill: 8, death: 7, help: 14 },
				class: { points: 9.7, icon: "Золото" },
			},
			{
				heroName: heroes.belerick.name,
				kda: { kill: 3, death: 9, help: 16 },
				class: { points: 7.4, icon: "Золото" },
			},
			{
				heroName: heroes.xBorg.name,
				kda: { kill: 10, death: 1, help: 10 },
				class: { points: 9.0, icon: "МВП победившей команды" },
			},
			{
				heroName: heroes.lancelot.name,
				kda: { kill: 3, death: 4, help: 7 },
				class: { points: 5.7, icon: "Серебро" },
			},
			{
				heroName: heroes.lunox.name,
				kda: { kill: 10, death: 8, help: 10 },
				class: { points: 7.8, icon: "Золото" },
			},
		],
		enemyTeam: [
			{
				heroName: heroes.hylos.name,
				kda: { kill: 2, death: 11, help: 14 },
				class: { points: 6.6, icon: "Серебро" },
			},
			{
				heroName: heroes.clint.name,
				kda: { kill: 8, death: 6, help: 9 },
				class: { points: 8.8, icon: "МВП проигравей команды" },
			},
			{
				heroName: heroes.cici.name,
				kda: { kill: 8, death: 7, help: 4 },
				class: { points: 6.4, icon: "Серебро" },
			},
			{
				heroName: heroes.zhuxin.name,
				kda: { kill: 3, death: 5, help: 15 },
				class: { points: 8.6, icon: "Золото" },
			},
			{
				heroName: heroes.hayabusa.name,
				kda: { kill: 7, death: 5, help: 3 },
				class: { points: 5.7, icon: "Серебро" },
			},
		],
		score: {
			myTeam: 34,
			enemyTeam: 28,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: false,
		date: new Date("2026-03-17"),
		battleTime: 1043,
		myHero: {
			heroName: "Белерик",
			kda: {
				kill: 3,
				death: 7,
				help: 19,
			},
			class: {
				points: 8.3,
				icon: "Золото",
			},
		},
		myTeam: [
			{
				heroName: "Глу",
				kda: {
					kill: 3,
					death: 2,
					help: 19,
				},
				class: {
					points: 10.7,
					icon: "МВП проигравей команды",
				},
			},
			{
				heroName: "Белерик",
				kda: {
					kill: 3,
					death: 7,
					help: 19,
				},
				class: {
					points: 8.3,
					icon: "Золото",
				},
			},
			{
				heroName: "Лесли",
				kda: {
					kill: 10,
					death: 6,
					help: 11,
				},
				class: {
					points: 8.6,
					icon: "Золото",
				},
			},
			{
				heroName: "Фредрин",
				kda: {
					kill: 5,
					death: 7,
					help: 11,
				},
				class: {
					points: 6.7,
					icon: "Серебро",
				},
			},
			{
				heroName: "Селена",
				kda: {
					kill: 16,
					death: 6,
					help: 4,
				},
				class: {
					points: 9.1,
					icon: "Золото",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Минотавр",
				kda: {
					kill: 3,
					death: 4,
					help: 10,
				},
				class: {
					points: 8.5,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Пополь и Купа",
				kda: {
					kill: 7,
					death: 7,
					help: 7,
				},
				class: {
					points: 6.9,
					icon: "Серебро",
				},
			},
			{
				heroName: "Мия",
				kda: {
					kill: 3,
					death: 12,
					help: 8,
				},
				class: {
					points: 4.1,
					icon: "Серебро",
				},
			},
			{
				heroName: "Валир",
				kda: {
					kill: 8,
					death: 8,
					help: 6,
				},
				class: {
					points: 6.5,
					icon: "Серебро",
				},
			},
			{
				heroName: "Сан",
				kda: {
					kill: 7,
					death: 6,
					help: 8,
				},
				class: {
					points: 8.1,
					icon: "Золото",
				},
			},
		],
		score: {
			myTeam: 37,
			enemyTeam: 28,
		},
		rang: {
			starsDifference: -1,
		},
	},
];

const testBattle: IBattle = {
	win: true,
	date: new Date("2026-03-17"),
	battleTime: 601,
	myHero: {
		heroName: "Эймон",
		kda: {
			kill: 0,
			death: 0,
			help: 0,
		},
		class: {
			points: 3,
			icon: "Серебро",
		},
	},
	myTeam: [
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
	],
	enemyTeam: [
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
		{
			heroName: "Эймон",
			kda: {
				kill: 0,
				death: 0,
				help: 0,
			},
			class: {
				points: 3,
				icon: "Серебро",
			},
		},
	],
	score: {
		myTeam: 0,
		enemyTeam: 0,
	},
	rang: {
		starsDifference: 0,
	},
};
