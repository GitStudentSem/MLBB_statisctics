import type { IBattle } from "../gamesInfo";
import {
	readBooleanField,
	readDateField,
	readNumberField,
} from "./formValueReaders";
import { parseHero } from "./heroParser";
import { parseRang } from "./rangParser";
import { parseEnemyTeam, parseMyTeam } from "./teamParser";

const parseScore = (formData: FormData): IBattle["score"] => {
	return {
		myTeam: readNumberField(formData, "score.myTeam"),
		enemyTeam: readNumberField(formData, "score.enemyTeam"),
	};
};

export const parseBattleForm = (form: HTMLFormElement): IBattle => {
	const formData = new FormData(form);

	return {
		win: readBooleanField(formData, "win"),
		date: readDateField(formData, "date"),
		battleTime: readNumberField(formData, "battleTime"),
		myHero: parseHero(formData, "myHero"),
		myTeam: parseMyTeam(formData),
		enemyTeam: parseEnemyTeam(formData),
		score: parseScore(formData),
		rang: parseRang(formData),
	};
};
