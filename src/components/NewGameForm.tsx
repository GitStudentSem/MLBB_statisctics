import { useState } from "react";
import type { IBattle, IRangInfo } from "../gamesInfo";
import type { HeroesNameType } from "../heroesNames";
import { heroes } from "../heroesNames";
import { HeroInfoInput } from "./HeroInfoInput";
import {
	createDefaultHeroInfo,
	type HeroInfoFormState,
	mapHeroFormToHeroInfo,
} from "./heroInfoForm.utils";
import { NumberInput } from "./NumberInput";
import { TeamInput } from "./TeamInput";

type NewGameFormProps = {
	onCreate: (battle: IBattle) => void;
};

const rangNames: Array<IRangInfo["rangName"]> = ["Эпик", "Легенда", "Мифик"];
const rangNumbers: Array<IRangInfo["rangNumber"]> = [1, 2, 3, 4, 5];
const starsDifferenceValues: Array<IBattle["rang"]["starsDifference"]> = [
	-1, 0, 1,
];

function createTeam(heroName: HeroesNameType): HeroInfoFormState[] {
	return Array.from({ length: 5 }, () => createDefaultHeroInfo(heroName));
}

function asTupleOfFive<T>(arr: T[]): [T, T, T, T, T] {
	if (arr.length !== 5) {
		throw new Error("Команда должна содержать ровно 5 игроков");
	}

	return [arr[0], arr[1], arr[2], arr[3], arr[4]];
}

function formatBattleForClipboard(
	battle: IBattle,
	dateForConstructor: string,
): string {
	const serialized = JSON.stringify(
		{
			...battle,
			date: dateForConstructor,
		},
		null,
		"\t",
	);

	return `${serialized
		.replace(/"([A-Za-z_][A-Za-z0-9_]*)":/g, "$1:")
		.replace(/date:\\s*"([0-9-]+)"/, 'date: new Date("$1")')},`;
}

export function NewGameForm({ onCreate }: NewGameFormProps) {
	const heroNames = Object.values(heroes).map(
		(hero) => hero.name,
	) as HeroesNameType[];
	const defaultHeroName = heroNames[0];

	const [win, setWin] = useState(true);
	const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
	const [battleTime, setBattleTime] = useState(10);
	const [myHero, setMyHero] = useState(() =>
		createDefaultHeroInfo(defaultHeroName),
	);
	const [myTeam, setMyTeam] = useState<HeroInfoFormState[]>(() =>
		createTeam(defaultHeroName),
	);
	const [enemyTeam, setEnemyTeam] = useState<HeroInfoFormState[]>(() =>
		createTeam(defaultHeroName),
	);
	const [myTeamScore, setMyTeamScore] = useState(0);
	const [enemyTeamScore, setEnemyTeamScore] = useState(0);
	const [starsDifference, setStarsDifference] =
		useState<IBattle["rang"]["starsDifference"]>(0);
	const [submitError, setSubmitError] = useState("");
	const [copyStatus, setCopyStatus] = useState("");
	const [createdGames, setCreatedGames] = useState(0);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
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

			onCreate(battle);
			setCreatedGames((value) => value + 1);
			setSubmitError("");

			if (!navigator.clipboard?.writeText) {
				setCopyStatus("Игра добавлена, но буфер обмена недоступен");
				return;
			}

			try {
				await navigator.clipboard.writeText(
					formatBattleForClipboard(battle, date),
				);
				setCopyStatus("Объект игры скопирован в буфер обмена");
			} catch {
				setCopyStatus(
					"Игра добавлена, но не удалось скопировать объект в буфер обмена",
				);
			}
		} catch (error) {
			setCopyStatus("");
			setSubmitError(
				error instanceof Error
					? error.message
					: "Не удалось собрать данные игры",
			);
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
						<select
							value={win ? "win" : "lose"}
							onChange={(event) => setWin(event.currentTarget.value === "win")}
						>
							<option value="win">Победа</option>
							<option value="lose">Поражение</option>
						</select>
					</label>
					<label className="field">
						<span>Дата</span>
						<input
							type="date"
							value={date}
							onChange={(event) => setDate(event.currentTarget.value)}
							required
						/>
					</label>
					<NumberInput
						label="Время битвы (сек.)"
						value={battleTime}
						onChange={setBattleTime}
						min={0}
					/>
					<NumberInput
						label="Очки моей команды"
						value={myTeamScore}
						onChange={setMyTeamScore}
						min={0}
					/>
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
								setStarsDifference(
									Number(
										event.currentTarget.value,
									) as IBattle["rang"]["starsDifference"],
								)
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

			<HeroInfoInput
				title="Мой герой"
				heroNames={heroNames}
				value={myHero}
				onChange={setMyHero}
			/>
			<TeamInput
				title="Моя команда"
				heroNames={heroNames}
				value={myTeam}
				onChange={setMyTeam}
			/>
			<TeamInput
				title="Вражеская команда"
				heroNames={heroNames}
				value={enemyTeam}
				onChange={setEnemyTeam}
			/>

			<div className="actions-row">
				<button type="submit">Добавить игру</button>
				{createdGames > 0 && <span>Добавлено игр: {createdGames}</span>}
			</div>
			{copyStatus && <p>{copyStatus}</p>}
			{submitError && <p className="error-text">{submitError}</p>}
		</form>
	);
}
