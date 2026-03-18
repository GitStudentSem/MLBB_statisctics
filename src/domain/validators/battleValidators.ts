import type { IBattle } from "../../gamesInfo";
import type { ValidationIssue, ValidationResult } from "../types/validation";

function isFiniteNonNegative(n: number) {
	return Number.isFinite(n) && n >= 0;
}

export function validateBattle(battle: IBattle): ValidationResult {
	const issues: ValidationIssue[] = [];

	if (!(battle.date instanceof Date) || Number.isNaN(battle.date.getTime())) {
		issues.push({
			field: "date",
			message: "Некорректная дата",
			severity: "error",
		});
	}

	if (battle.date.getTime() > Date.now()) {
		issues.push({
			field: "date",
			message: "Дата матча не может быть в будущем",
			severity: "error",
		});
	}

	if (!isFiniteNonNegative(battle.battleTime)) {
		issues.push({
			field: "battleTime",
			message: "Время матча должно быть >= 0",
			severity: "error",
		});
	}

	if (battle.myTeam.length !== 5) {
		issues.push({
			field: "myTeam",
			message: "В вашей команде должно быть 5 игроков",
			severity: "error",
		});
	}
	if (battle.enemyTeam.length !== 5) {
		issues.push({
			field: "enemyTeam",
			message: "В каждой команде должно быть 5 игроков",
			severity: "error",
		});
	}

	if (![-1, 0, 1, 2].includes(battle.rang.starsDifference)) {
		issues.push({
			field: "rang.starsDifference",
			message: "starsDifference должен быть -1, 0 или 1 или 2",
			severity: "error",
		});
	}

	return { isValid: issues.every((i) => i.severity !== "error"), issues };
}
