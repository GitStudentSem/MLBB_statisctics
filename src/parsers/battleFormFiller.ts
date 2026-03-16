import type { IBattle, IHeroInfo } from "../gamesInfo";

const getField = (form: HTMLFormElement, fieldName: string): HTMLInputElement | HTMLSelectElement => {
	const field = form.querySelector<HTMLInputElement | HTMLSelectElement>(
		`[name="${fieldName}"]`,
	);
	if (!field) {
		throw new Error(`Поле "${fieldName}" не найдено`);
	}
	return field;
};

const setFieldValue = (
	form: HTMLFormElement,
	fieldName: string,
	value: string | number,
) => {
	const field = getField(form, fieldName);
	field.value = String(value);
};

const formatDateForInput = (date: Date): string => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

const fillHero = (form: HTMLFormElement, prefix: string, hero: IHeroInfo) => {
	setFieldValue(form, `${prefix}.heroName`, hero.heroName);
	setFieldValue(form, `${prefix}.kda.kill`, hero.kda.kill);
	setFieldValue(form, `${prefix}.kda.death`, hero.kda.death);
	setFieldValue(form, `${prefix}.kda.help`, hero.kda.help);
	setFieldValue(form, `${prefix}.class.points`, hero.class.points);
	setFieldValue(form, `${prefix}.class.icon`, hero.class.icon);
};

const fillTeam = (
	form: HTMLFormElement,
	teamKey: "myTeam" | "enemyTeam",
	heroes: IBattle["myTeam"] | IBattle["enemyTeam"],
) => {
	heroes.forEach((hero, index) => {
		fillHero(form, `${teamKey}[${index}]`, hero);
	});
};

const fillRank = (form: HTMLFormElement, rang: IBattle["rang"]) => {
	setFieldValue(form, "rang.prev.rangName", rang.prev.rangName);
	setFieldValue(form, "rang.prev.rangNumber", rang.prev.rangNumber);
	setFieldValue(form, "rang.prev.stars", rang.prev.stars);

	setFieldValue(form, "rang.now.rangName", rang.now.rangName);
	setFieldValue(form, "rang.now.rangNumber", rang.now.rangNumber);
	setFieldValue(form, "rang.now.stars", rang.now.stars);

	setFieldValue(form, "rang.starsDifference", rang.starsDifference);
};

export const fillBattleForm = (form: HTMLFormElement, battle: IBattle) => {
	setFieldValue(form, "win", battle.win ? "true" : "false");
	setFieldValue(form, "date", formatDateForInput(battle.date));
	setFieldValue(form, "battleTime", battle.battleTime);

	setFieldValue(form, "score.myTeam", battle.score.myTeam);
	setFieldValue(form, "score.enemyTeam", battle.score.enemyTeam);

	fillRank(form, battle.rang);
	fillHero(form, "myHero", battle.myHero);
	fillTeam(form, "myTeam", battle.myTeam);
	fillTeam(form, "enemyTeam", battle.enemyTeam);
};
