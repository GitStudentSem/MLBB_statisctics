import { makeAutoObservable } from "mobx";
import type { MatchesStore } from "./MatchesStore";

export class StatsStore {
	private matchesStore: MatchesStore;
	constructor(matchesStore: MatchesStore) {
		this.matchesStore = matchesStore;
		makeAutoObservable(this, {}, { autoBind: true });
	}

	get totalGames() {
		return this.matchesStore.battles.length;
	}

	get wins() {
		return this.matchesStore.battles.filter((b) => b.win).length;
	}

	get winRate() {
		if (this.totalGames === 0) return 0;
		return (this.wins / this.totalGames) * 100;
	}
}
