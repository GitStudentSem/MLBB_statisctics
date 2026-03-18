import { makeAutoObservable } from "mobx";
import { validateBattle } from "../domain/validators/battleValidators";
import type { IBattle } from "../gamesInfo";
import { battls } from "../gamesInfo";

export class MatchesStore {
	battles: IBattle[] = battls;

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	get totalGames() {
		return this.battles.length;
	}

	addBattle(battle: IBattle): void {
		const validateResult = validateBattle(battle);

		if (!validateResult.isValid) {
			const text = validateResult.issues
				.map((i) => `${i.field}: ${i.message}`)
				.join("; ");
			throw new Error(text);
		}

		this.battles.push(battle);
	}

	removeBattle(index: number): void {
		this.battles.splice(index, 1);
	}
}
