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
	heroName: string;

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
		 * @description Предыдущий ранг
		 */
		prev: IRangInfo;

		/**
		 * @description Текущий ранг
		 */
		now: IRangInfo;

		/**
		 * @description Сколько звезд я получил за игру
		 */
		starsDifference: -1 | 0 | 1;
	};
}

export const battls: IBattle[] = [];
