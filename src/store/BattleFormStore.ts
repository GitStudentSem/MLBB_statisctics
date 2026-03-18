import { makeAutoObservable } from "mobx";
import {
	createDefaultHeroInfo,
	defaultHeroName,
	type HeroInfoFormState,
} from "../components/heroInfoForm.utils";
import type { StarsDifferenceType } from "../gamesInfo";
import type { HeroesNameType } from "../heroesNames";

function createTeam(heroName: HeroesNameType): HeroInfoFormState[] {
	return Array.from({ length: 5 }, () => createDefaultHeroInfo(heroName));
}

export class BattleFormStore {
	// TODO: перенеси сюда поля из NewGameForm useState
	win = true;
	date = new Date().toISOString().slice(0, 10);
	battleTime = 600;
	submitError = "";
	myTeamScore = 0;
	enemyTeamScore = 0;
	starsDifference: StarsDifferenceType = 1;

	myHero = createDefaultHeroInfo(defaultHeroName);

	myTeam = createTeam(defaultHeroName);
	enemyTeam = createTeam(defaultHeroName);

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	setWin(value: boolean) {
		this.win = value;
	}

	setDate(value: string) {
		this.date = value;
	}

	setBattleTime(battleTime: number) {
		this.battleTime = battleTime;
	}

	setMyTeamScore(myTeamScore: number) {
		this.myTeamScore = myTeamScore;
	}

	setEnemyTeamScore(enemyTeamScore: number) {
		this.enemyTeamScore = enemyTeamScore;
	}

	setMyHero(myHero: HeroInfoFormState) {
		this.myHero = myHero;
	}

	setMyTeam(myTeam: HeroInfoFormState[]) {
		this.myTeam = myTeam;
	}

	setEnemyTeam(enemyTeam: HeroInfoFormState[]) {
		this.enemyTeam = enemyTeam;
	}

	setStarsDifference(starsDifference: StarsDifferenceType) {
		this.starsDifference = starsDifference;
	}

	// Когда перенесешь все поля:
	// toBattle(): IBattle { ... }
	// reset(): void { ... }
}
