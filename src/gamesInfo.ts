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
			| "МВП проигравшей команды";
	};
}

export type StarsDifferenceType = -1 | 0 | 1;

export const classRanges = {
	bronze: { min: 3, max: 3.9 },
	silver: { min: 4, max: 7 },
	gold: { min: 7.1, max: 99 },
};

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
		starsDifference: StarsDifferenceType;
	};
}

/**
 * @description Стартовый ранг аккаунта для отсчета прогресса
 */
export const accountStartingRang: IRangInfo = {
	rangName: "Эпик",
	rangNumber: 1,
	stars: 3,
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
				class: { points: 10, icon: "Золото" },
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
				class: { points: 11.7, icon: "МВП проигравшей команды" },
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
				class: { points: 8.4, icon: "МВП проигравшей команды" },
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
				class: { points: 8.8, icon: "МВП проигравшей команды" },
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
				class: { points: 4.4, icon: "Серебро" },
			},
			{
				heroName: heroes.ixia.name,
				kda: { kill: 2, death: 6, help: 2 },
				class: { points: 4.4, icon: "Серебро" },
			},
			{
				heroName: heroes.helcurt.name,
				kda: { kill: 6, death: 4, help: 3 },
				class: { points: 8.0, icon: "МВП проигравшей команды" },
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
				class: { points: 8.8, icon: "МВП проигравшей команды" },
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
					icon: "МВП проигравшей команды",
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
	{
		win: true,
		date: new Date("2026-03-18"),
		battleTime: 681,
		myHero: {
			heroName: "Хилос",
			kda: {
				kill: 3,
				death: 3,
				help: 14,
			},
			class: {
				points: 9.6,
				icon: "Золото",
			},
		},
		myTeam: [
			{
				heroName: "Чичи",
				kda: {
					kill: 9,
					death: 0,
					help: 9,
				},
				class: {
					points: 12.5,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Валир",
				kda: {
					kill: 2,
					death: 2,
					help: 13,
				},
				class: {
					points: 9.2,
					icon: "Золото",
				},
			},
			{
				heroName: "Хилос",
				kda: {
					kill: 2,
					death: 3,
					help: 14,
				},
				class: {
					points: 9.6,
					icon: "Золото",
				},
			},
			{
				heroName: "Эймон",
				kda: {
					kill: 4,
					death: 0,
					help: 8,
				},
				class: {
					points: 9.7,
					icon: "Золото",
				},
			},
			{
				heroName: "Грейнджер",
				kda: {
					kill: 5,
					death: 0,
					help: 7,
				},
				class: {
					points: 9.8,
					icon: "Золото",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Лапу-Лапу",
				kda: {
					kill: 0,
					death: 5,
					help: 1,
				},
				class: {
					points: 3.5,
					icon: "Шоколад",
				},
			},
			{
				heroName: "Минотавр",
				kda: {
					kill: 1,
					death: 9,
					help: 1,
				},
				class: {
					points: 3.3,
					icon: "Шоколад",
				},
			},
			{
				heroName: "Ксавьер",
				kda: {
					kill: 1,
					death: 1,
					help: 4,
				},
				class: {
					points: 7.3,
					icon: "МВП проигравшей команды",
				},
			},
			{
				heroName: "Иритель",
				kda: {
					kill: 2,
					death: 3,
					help: 0,
				},
				class: {
					points: 4.5,
					icon: "Серебро",
				},
			},
			{
				heroName: "Леоморд",
				kda: {
					kill: 1,
					death: 4,
					help: 1,
				},
				class: {
					points: 3.9,
					icon: "Шоколад",
				},
			},
		],
		score: {
			myTeam: 22,
			enemyTeam: 5,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: false,
		date: new Date("2026-03-18"),
		battleTime: 1095,
		myHero: {
			heroName: "Хильда",
			kda: {
				kill: 7,
				death: 9,
				help: 9,
			},
			class: {
				points: 7.6,
				icon: "Золото",
			},
		},
		myTeam: [
			{
				heroName: "Ханаби",
				kda: {
					kill: 2,
					death: 11,
					help: 10,
				},
				class: {
					points: 4.8,
					icon: "Серебро",
				},
			},
			{
				heroName: "Бейн",
				kda: {
					kill: 4,
					death: 5,
					help: 12,
				},
				class: {
					points: 8.5,
					icon: "МВП проигравшей команды",
				},
			},
			{
				heroName: "Ли Сун Син",
				kda: {
					kill: 7,
					death: 7,
					help: 11,
				},
				class: {
					points: 7.8,
					icon: "Золото",
				},
			},
			{
				heroName: "Вексана",
				kda: {
					kill: 6,
					death: 5,
					help: 11,
				},
				class: {
					points: 8.4,
					icon: "Золото",
				},
			},
			{
				heroName: "Хильда",
				kda: {
					kill: 7,
					death: 9,
					help: 9,
				},
				class: {
					points: 7.6,
					icon: "Золото",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Глу",
				kda: {
					kill: 3,
					death: 8,
					help: 10,
				},
				class: {
					points: 5.7,
					icon: "Серебро",
				},
			},
			{
				heroName: "Ангела",
				kda: {
					kill: 3,
					death: 4,
					help: 25,
				},
				class: {
					points: 10.5,
					icon: "Золото",
				},
			},
			{
				heroName: "Су Ё",
				kda: {
					kill: 15,
					death: 4,
					help: 11,
				},
				class: {
					points: 13.1,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Госсен",
				kda: {
					kill: 10,
					death: 7,
					help: 14,
				},
				class: {
					points: 9,
					icon: "Золото",
				},
			},
			{
				heroName: "Керри",
				kda: {
					kill: 6,
					death: 3,
					help: 7,
				},
				class: {
					points: 7.5,
					icon: "Золото",
				},
			},
		],
		score: {
			myTeam: 26,
			enemyTeam: 37,
		},
		rang: {
			starsDifference: 0,
		},
	},
	{
		win: false,
		date: new Date("2026-03-19"),
		battleTime: 60 * 18 + 54,
		myHero: {
			heroName: "Грок",
			kda: {
				kill: 1,
				death: 6,
				help: 12,
			},
			class: {
				points: 6.4,
				icon: "Серебро",
			},
		},
		myTeam: [
			{
				heroName: "Чжу Синь",
				kda: {
					kill: 16,
					death: 5,
					help: 11,
				},
				class: {
					points: 12.3,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Грок",
				kda: {
					kill: 1,
					death: 6,
					help: 12,
				},
				class: {
					points: 6.4,
					icon: "Серебро",
				},
			},
			{
				heroName: "Керри",
				kda: {
					kill: 9,
					death: 6,
					help: 9,
				},
				class: {
					points: 8.7,
					icon: "Золото",
				},
			},
			{
				heroName: "Леоморд",
				kda: {
					kill: 1,
					death: 3,
					help: 16,
				},
				class: {
					points: 7.8,
					icon: "Золото",
				},
			},
			{
				heroName: "Лапу-Лапу",
				kda: {
					kill: 2,
					death: 4,
					help: 15,
				},
				class: {
					points: 8.8,
					icon: "Золото",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Чонг",
				kda: {
					kill: 8,
					death: 7,
					help: 7,
				},
				class: {
					points: 8.1,
					icon: "Золото",
				},
			},
			{
				heroName: "Цзэтянь",
				kda: {
					kill: 2,
					death: 2,
					help: 17,
				},
				class: {
					points: 10.2,
					icon: "МВП проигравшей команды",
				},
			},
			{
				heroName: "Лесли",
				kda: {
					kill: 9,
					death: 3,
					help: 6,
				},
				class: {
					points: 9.2,
					icon: "Золото",
				},
			},
			{
				heroName: "Альфа",
				kda: {
					kill: 5,
					death: 8,
					help: 9,
				},
				class: {
					points: 6.5,
					icon: "Серебро",
				},
			},
			{
				heroName: "Тигрил",
				kda: {
					kill: 0,
					death: 9,
					help: 14,
				},
				class: {
					points: 6.0,
					icon: "Серебро",
				},
			},
		],
		score: {
			myTeam: 29,
			enemyTeam: 24,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: true,
		date: new Date("2026-03-20"),
		battleTime: 1080,
		myHero: {
			heroName: "Белерик",
			kda: {
				kill: 4,
				death: 8,
				help: 23,
			},
			class: {
				points: 9.6,
				icon: "Золото",
			},
		},
		myTeam: [
			{
				heroName: "Чжу Синь",
				kda: {
					kill: 7,
					death: 6,
					help: 19,
				},
				class: {
					points: 9.9,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Лапу-Лапу",
				kda: {
					kill: 4,
					death: 4,
					help: 13,
				},
				class: {
					points: 8.2,
					icon: "Золото",
				},
			},
			{
				heroName: "Госсен",
				kda: {
					kill: 13,
					death: 5,
					help: 6,
				},
				class: {
					points: 8.6,
					icon: "Золото",
				},
			},
			{
				heroName: "Лесли",
				kda: {
					kill: 11,
					death: 7,
					help: 13,
				},
				class: {
					points: 9,
					icon: "Золото",
				},
			},
			{
				heroName: "Белерик",
				kda: {
					kill: 4,
					death: 8,
					help: 23,
				},
				class: {
					points: 9.6,
					icon: "Золото",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Лилия",
				kda: {
					kill: 2,
					death: 8,
					help: 17,
				},
				class: {
					points: 7.2,
					icon: "Золото",
				},
			},
			{
				heroName: "Клинт",
				kda: {
					kill: 7,
					death: 9,
					help: 3,
				},
				class: {
					points: 5.2,
					icon: "Серебро",
				},
			},
			{
				heroName: "Чичи",
				kda: {
					kill: 6,
					death: 5,
					help: 5,
				},
				class: {
					points: 6.7,
					icon: "Серебро",
				},
			},
			{
				heroName: "Сабер",
				kda: {
					kill: 12,
					death: 9,
					help: 11,
				},
				class: {
					points: 8.9,
					icon: "МВП проигравшей команды",
				},
			},
			{
				heroName: "Баданг",
				kda: {
					kill: 3,
					death: 8,
					help: 16,
				},
				class: {
					points: 7.8,
					icon: "Золото",
				},
			},
		],
		score: {
			myTeam: 39,
			enemyTeam: 30,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: false,
		date: new Date("2026-03-20"),
		battleTime: 1382,
		myHero: {
			heroName: "Белерик",
			kda: {
				kill: 1,
				death: 9,
				help: 21,
			},
			class: {
				points: 7.6,
				icon: "Золото",
			},
		},
		myTeam: [
			{
				heroName: "Эйдора",
				kda: {
					kill: 19,
					death: 9,
					help: 9,
				},
				class: {
					points: 10.6,
					icon: "МВП проигравшей команды",
				},
			},
			{
				heroName: "Альфа",
				kda: {
					kill: 9,
					death: 8,
					help: 14,
				},
				class: {
					points: 8.7,
					icon: "Золото",
				},
			},
			{
				heroName: "Лесли",
				kda: {
					kill: 2,
					death: 14,
					help: 6,
				},
				class: {
					points: 3,
					icon: "Шоколад",
				},
			},
			{
				heroName: "Белерик",
				kda: {
					kill: 1,
					death: 9,
					help: 21,
				},
				class: {
					points: 7.6,
					icon: "Золото",
				},
			},
			{
				heroName: "Лукас",
				kda: {
					kill: 5,
					death: 10,
					help: 13,
				},
				class: {
					points: 7.1,
					icon: "Золото",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Хилос",
				kda: {
					kill: 12,
					death: 6,
					help: 27,
				},
				class: {
					points: 13.5,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Грейнджер",
				kda: {
					kill: 15,
					death: 8,
					help: 12,
				},
				class: {
					points: 9.8,
					icon: "Золото",
				},
			},
			{
				heroName: "Фаша",
				kda: {
					kill: 5,
					death: 7,
					help: 15,
				},
				class: {
					points: 7,
					icon: "Серебро",
				},
			},
			{
				heroName: "Инь",
				kda: {
					kill: 14,
					death: 8,
					help: 8,
				},
				class: {
					points: 8.4,
					icon: "Золото",
				},
			},
			{
				heroName: "Фредрин",
				kda: {
					kill: 4,
					death: 7,
					help: 19,
				},
				class: {
					points: 8,
					icon: "Золото",
				},
			},
		],
		score: {
			myTeam: 36,
			enemyTeam: 50,
		},
		rang: {
			starsDifference: -1,
		},
	},
	{
		win: true,
		date: new Date("2026-03-24"),
		battleTime: 836,
		myHero: {
			heroName: "Минотавр",
			kda: {
				kill: 1,
				death: 5,
				help: 13,
			},
			class: {
				points: 8.4,
				icon: "Золото",
			},
		},
		myTeam: [
			{
				heroName: "Лилия",
				kda: {
					kill: 2,
					death: 5,
					help: 12,
				},
				class: {
					points: 7.7,
					icon: "Золото",
				},
			},
			{
				heroName: "Минотавр",
				kda: {
					kill: 1,
					death: 5,
					help: 13,
				},
				class: {
					points: 8.4,
					icon: "Золото",
				},
			},
			{
				heroName: "Руби",
				kda: {
					kill: 3,
					death: 3,
					help: 13,
				},
				class: {
					points: 9.7,
					icon: "Золото",
				},
			},
			{
				heroName: "Керри",
				kda: {
					kill: 12,
					death: 1,
					help: 3,
				},
				class: {
					points: 11.2,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Фредрин",
				kda: {
					kill: 3,
					death: 2,
					help: 9,
				},
				class: {
					points: 8.1,
					icon: "Золото",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Лукас",
				kda: {
					kill: 4,
					death: 7,
					help: 7,
				},
				class: {
					points: 6.6,
					icon: "Серебро",
				},
			},
			{
				heroName: "Горд",
				kda: {
					kill: 2,
					death: 0,
					help: 10,
				},
				class: {
					points: 10.4,
					icon: "МВП проигравшей команды",
				},
			},
			{
				heroName: "Франко",
				kda: {
					kill: 2,
					death: 3,
					help: 12,
				},
				class: {
					points: 9.6,
					icon: "Золото",
				},
			},
			{
				heroName: "Лесли",
				kda: {
					kill: 2,
					death: 4,
					help: 1,
				},
				class: {
					points: 4.5,
					icon: "Серебро",
				},
			},
			{
				heroName: "Алукард",
				kda: {
					kill: 6,
					death: 7,
					help: 9,
				},
				class: {
					points: 8.4,
					icon: "Золото",
				},
			},
		],
		score: {
			myTeam: 21,
			enemyTeam: 16,
		},
		rang: {
			starsDifference: 1,
		},
	},
	{
		win: false,
		date: new Date("2026-03-24"),
		battleTime: 1000,
		myHero: {
			heroName: "Минотавр",
			kda: {
				kill: 0,
				death: 6,
				help: 15,
			},
			class: {
				points: 8,
				icon: "Золото",
			},
		},
		myTeam: [
			{
				heroName: "Заск",
				kda: {
					kill: 5,
					death: 5,
					help: 6,
				},
				class: {
					points: 6,
					icon: "Серебро",
				},
			},
			{
				heroName: "Минотавр",
				kda: {
					kill: 0,
					death: 6,
					help: 15,
				},
				class: {
					points: 8,
					icon: "Золото",
				},
			},
			{
				heroName: "Дариус",
				kda: {
					kill: 4,
					death: 11,
					help: 7,
				},
				class: {
					points: 4,
					icon: "Серебро",
				},
			},
			{
				heroName: "Мия",
				kda: {
					kill: 13,
					death: 9,
					help: 5,
				},
				class: {
					points: 9.2,
					icon: "МВП проигравшей команды",
				},
			},
			{
				heroName: "Чичи",
				kda: {
					kill: 5,
					death: 8,
					help: 5,
				},
				class: {
					points: 5.5,
					icon: "Серебро",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Теризла",
				kda: {
					kill: 4,
					death: 7,
					help: 12,
				},
				class: {
					points: 7,
					icon: "Серебро",
				},
			},
			{
				heroName: "Валентина",
				kda: {
					kill: 8,
					death: 1,
					help: 9,
				},
				class: {
					points: 9.3,
					icon: "Золото",
				},
			},
			{
				heroName: "Сабер",
				kda: {
					kill: 13,
					death: 5,
					help: 10,
				},
				class: {
					points: 9.8,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Ханаби",
				kda: {
					kill: 7,
					death: 7,
					help: 4,
				},
				class: {
					points: 6.2,
					icon: "Серебро",
				},
			},
			{
				heroName: "Халид",
				kda: {
					kill: 7,
					death: 7,
					help: 17,
				},
				class: {
					points: 9.2,
					icon: "Золото",
				},
			},
		],
		score: {
			myTeam: 27,
			enemyTeam: 39,
		},
		rang: {
			starsDifference: -1,
		},
	},
	{
		win: true,
		date: "2026-03-26",
		battleTime: 422,
		myHero: {
			heroName: "Белерик",
			kda: {
				kill: 1,
				death: 5,
				help: 5,
			},
			class: {
				points: 5.6,
				icon: "Серебро",
			},
		},
		myTeam: [
			{
				heroName: "Мия",
				kda: {
					kill: 3,
					death: 2,
					help: 3,
				},
				class: {
					points: 6.4,
					icon: "Серебро",
				},
			},
			{
				heroName: "Аврора",
				kda: {
					kill: 2,
					death: 2,
					help: 3,
				},
				class: {
					points: 6.4,
					icon: "Серебро",
				},
			},
			{
				heroName: "Белерик",
				kda: {
					kill: 1,
					death: 5,
					help: 5,
				},
				class: {
					points: 5.6,
					icon: "Серебро",
				},
			},
			{
				heroName: "Руби",
				kda: {
					kill: 1,
					death: 2,
					help: 4,
				},
				class: {
					points: 6.5,
					icon: "Серебро",
				},
			},
			{
				heroName: "Инь",
				kda: {
					kill: 6,
					death: 0,
					help: 1,
				},
				class: {
					points: 8.8,
					icon: "МВП победившей команды",
				},
			},
		],
		enemyTeam: [
			{
				heroName: "Иксия",
				kda: {
					kill: 2,
					death: 3,
					help: 2,
				},
				class: {
					points: 6.2,
					icon: "Серебро",
				},
			},
			{
				heroName: "Мартис",
				kda: {
					kill: 4,
					death: 3,
					help: 1,
				},
				class: {
					points: 5.7,
					icon: "Серебро",
				},
			},
			{
				heroName: "Атлас",
				kda: {
					kill: 2,
					death: 4,
					help: 7,
				},
				class: {
					points: 8.4,
					icon: "МВП победившей команды",
				},
			},
			{
				heroName: "Сисилион",
				kda: {
					kill: 2,
					death: 1,
					help: 6,
				},
				class: {
					points: 8.2,
					icon: "Золото",
				},
			},
			{
				heroName: "Чичи",
				kda: {
					kill: 1,
					death: 2,
					help: 1,
				},
				class: {
					points: 4.8,
					icon: "Серебро",
				},
			},
		],
		score: {
			myTeam: 13,
			enemyTeam: 11,
		},
		rang: {
			starsDifference: 1,
		},
	},
];
