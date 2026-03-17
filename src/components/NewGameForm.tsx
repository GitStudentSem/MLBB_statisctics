import { useState } from "react";
import type { HeroesNameType } from "../heroesNames";
import { heroes } from "../heroesNames";
import type { IBattle, IRangInfo } from "../gamesInfo";
import { HeroInfoInput } from "./HeroInfoInput";
import {
	createDefaultHeroInfo,
	mapHeroFormToHeroInfo,
	type HeroInfoFormState,
} from "./heroInfoForm.utils";
import { NumberInput } from "./NumberInput";
import { TeamInput } from "./TeamInput";

type NewGameFormProps = {
	onCreate: (battle: IBattle, rangInfo: IRangInfo) => void;
};

const rangNames: Array<IRangInfo["rangName"]> = ["Эпик", "Легенда", "Мифик"];
const rangNumbers: Array<IRangInfo["rangNumber"]> = [1, 2, 3, 4, 5];
const starsDifferenceValues: Array<IBattle["rang"]["starsDifference"]> = [-1, 0, 1];

function createTeam(heroName: HeroesNameType): HeroInfoFormState[] {
	return Array.from({ length: 5 }, () => createDefaultHeroInfo(heroName));
}

function asTupleOfFive<T>(arr: T[]): [T, T, T, T, T] {
	if (arr.length !== 5) {
		throw new Error("Команда должна содержать ровно 5 игроков");
	}

	return [arr[0], arr[1], arr[2], arr[3], arr[4]];
}

export function NewGameForm({ onCreate }: NewGameFormProps) {
	const heroNames = Object.values(heroes).map((hero) => hero.name) as HeroesNameType[];
	const defaultHeroName = heroNames[0];

	const [win, setWin] = useState(true);
	const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
	const [battleTime, setBattleTime] = useState(10);
	const [myHero, setMyHero] = useState(() => createDefaultHeroInfo(defaultHeroName));
	const [myTeam, setMyTeam] = useState<HeroInfoFormState[]>(() => createTeam(defaultHeroName));
	const [enemyTeam, setEnemyTeam] = useState<HeroInfoFormState[]>(() => createTeam(defaultHeroName));
	const [myTeamScore, setMyTeamScore] = useState(0);
	const [enemyTeamScore, setEnemyTeamScore] = useState(0);
	const [starsDifference, setStarsDifference] = useState<IBattle["rang"]["starsDifference"]>(0);
	const [rangName, setRangName] = useState<IRangInfo["rangName"]>("Легенда");
	const [rangNumber, setRangNumber] = useState<IRangInfo["rangNumber"]>(5);
	const [stars, setStars] = useState(0);
	const [submitError, setSubmitError] = useState("");
	const [createdGames, setCreatedGames] = useState(0);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		try {
			const battle: IBattle = {
				win,
				date: new Date(date),
				battleTime,
				myHero: mapHeroFormToHeroInfo(myHero),
				myTeam: asTupleOfFive(myTeam.map(mapHeroFormToHeroInfo)),
				enemyTeam: asTupleOfFive(enemyTeam.map(mapHeroFormToHeroInfo)),
				score: {
					myTeam: myTeamScore,
					enemyTeam: enemyTeamScore,
				},
				rang: {
					starsDifference,
				},
			};

			const rangInfo: IRangInfo = {
				rangName,
				rangNumber,
				stars,
			};

			onCreate(battle, rangInfo);
			setCreatedGames((value) => value + 1);
			setSubmitError("");
		} catch (error) {
			setSubmitError(error instanceof Error ? error.message : "Не удалось собрать данные игры");
		}
	};

	return (
		<form className="new-game-form" onSubmit={handleSubmit}>
			<h1>Новая игра</h1>

			<section className="card">
				<h2>Основная информация</h2>
				<div className="two-col-grid">
					<label className="field">
						<span>Результат</span>
						<select value={win ? "win" : "lose"} onChange={(event) => setWin(event.currentTarget.value === "win")}>
							<option value="win">Победа</option>
							<option value="lose">Поражение</option>
						</select>
					</label>
					<label className="field">
						<span>Дата</span>
						<input type="date" value={date} onChange={(event) => setDate(event.currentTarget.value)} required />
					</label>
					<NumberInput
						label="Время битвы (сек.)"
						value={battleTime}
						onChange={setBattleTime}
						min={0}
					/>
					<NumberInput label="Очки моей команды" value={myTeamScore} onChange={setMyTeamScore} min={0} />
					<NumberInput
						label="Очки вражеской команды"
						value={enemyTeamScore}
						onChange={setEnemyTeamScore}
						min={0}
					/>
					<label className="field">
						<span>Звезды за игру</span>
						<select
							value={String(starsDifference)}
							onChange={(event) =>
								setStarsDifference(Number(event.currentTarget.value) as IBattle["rang"]["starsDifference"])
							}
						>
							{starsDifferenceValues.map((value) => (
								<option key={value} value={value}>
									{value}
								</option>
							))}
						</select>
					</label>
				</div>
			</section>

			<HeroInfoInput title="Мой герой" heroNames={heroNames} value={myHero} onChange={setMyHero} />
			<TeamInput title="Моя команда" heroNames={heroNames} value={myTeam} onChange={setMyTeam} />
			<TeamInput title="Вражеская команда" heroNames={heroNames} value={enemyTeam} onChange={setEnemyTeam} />

			<section className="card">
				<h2>Текущий ранг аккаунта</h2>
				<div className="three-col-grid">
					<label className="field">
						<span>Название ранга</span>
						<select
							value={rangName}
							onChange={(event) => setRangName(event.currentTarget.value as IRangInfo["rangName"])}
						>
							{rangNames.map((name) => (
								<option key={name} value={name}>
									{name}
								</option>
							))}
						</select>
					</label>
					<label className="field">
						<span>Номер ранга</span>
						<select
							value={String(rangNumber)}
							onChange={(event) => setRangNumber(Number(event.currentTarget.value) as IRangInfo["rangNumber"])}
						>
							{rangNumbers.map((numberValue) => (
								<option key={numberValue} value={numberValue}>
									{numberValue}
								</option>
							))}
						</select>
					</label>
					<NumberInput label="Количество звезд" value={stars} onChange={setStars} min={0} />
				</div>
			</section>

			<div className="actions-row">
				<button type="submit">Добавить игру</button>
				{createdGames > 0 && <span>Добавлено игр: {createdGames}</span>}
			</div>
			{submitError && <p className="error-text">{submitError}</p>}
		</form>
	);
}
