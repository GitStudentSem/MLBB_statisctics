import { makeAutoObservable } from "mobx";
import { accountStartingRang } from "../gamesInfo";
import type { MatchesStore } from "./MatchesStore";

/**
 * QUESTION:
 * Что делает этот стор?
 *
 * За что он отвечает?
 */
export class RankStore {
	private matchesStore: MatchesStore;

	constructor(matchesStore: MatchesStore) {
		this.matchesStore = matchesStore;
		makeAutoObservable(this, {}, { autoBind: true });
	}

	get starsDelta() {
		return this.matchesStore.battles.reduce(
			(acc, b) => acc + b.rang.starsDifference,
			0,
		);
	}

	get currentStars() {
		return accountStartingRang.stars + this.starsDelta;
	}
}
