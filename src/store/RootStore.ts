import { BattleFormStore } from "./BattleFormStore";
import { MatchesStore } from "./MatchesStore";
import { RankStore } from "./RankStore";
import { StatsStore } from "./StatsStore";

export class RootStore {
	matchesStore: MatchesStore;
	battleFormStore: BattleFormStore;
	rankStore: RankStore;
	statsStore: StatsStore;

	constructor() {
		this.matchesStore = new MatchesStore();
		this.battleFormStore = new BattleFormStore();
		this.rankStore = new RankStore(this.matchesStore);
		this.statsStore = new StatsStore(this.matchesStore);
	}
}
