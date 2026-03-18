import { observer } from "mobx-react-lite";
import { useState } from "react";
import type { IBattle, StarsDifferenceType } from "../gamesInfo";
import { battleFormStore } from "../store/NewBattleFormStore";
import { HeroInfoInput } from "./HeroInfoInput";
import { heroNames, mapHeroFormToHeroInfo } from "./heroInfoForm.utils";
import { NumberInput } from "./NumberInput";
import { TeamInput } from "./TeamInput";

type NewGameFormProps = {
	onCreate: (battle: IBattle) => void;
};

const starsDifferenceValues: Array<StarsDifferenceType> = [-1, 0, 1];

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

export const NewGameForm = observer(({ onCreate }: NewGameFormProps) => {
	const [submitError, setSubmitError] = useState("");

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();

		try {
			const battle: IBattle = {
				win: battleFormStore.win,
				date: new Date(battleFormStore.date),
				battleTime: battleFormStore.battleTime,
				myHero: mapHeroFormToHeroInfo(battleFormStore.myHero),
				myTeam: asTupleOfFive(
					battleFormStore.myTeam.map(mapHeroFormToHeroInfo),
				),
				enemyTeam: asTupleOfFive(
					battleFormStore.enemyTeam.map(mapHeroFormToHeroInfo),
				),
				score: {
					myTeam: battleFormStore.myTeamScore,
					enemyTeam: battleFormStore.enemyTeamScore,
				},
				rang: {
					starsDifference: battleFormStore.starsDifference,
				},
			};

			onCreate(battle);

			setSubmitError("");

			if (!navigator.clipboard?.writeText) {
				throw new Error("Игра добавлена, но буфер обмена недоступен");
			}

			try {
				await navigator.clipboard.writeText(
					formatBattleForClipboard(battle, battleFormStore.date),
				);
			} catch {
				throw new Error(
					"Игра добавлена, но не удалось скопировать объект в буфер обмена",
				);
			}
		} catch (error) {
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
							value={battleFormStore.win ? "win" : "lose"}
							onChange={(event) => {
								battleFormStore.setWin(event.currentTarget.value === "win");
							}}
						>
							<option value="win">Победа</option>
							<option value="lose">Поражение</option>
						</select>
					</label>
					<label className="field">
						<span>Дата</span>
						<input
							type="date"
							value={battleFormStore.date}
							onChange={(event) =>
								battleFormStore.setDate(event.currentTarget.value)
							}
							required
						/>
					</label>
					<NumberInput
						label="Время битвы (сек.)"
						value={battleFormStore.battleTime}
						onChange={battleFormStore.setBattleTime}
						min={0}
					/>
					<NumberInput
						label="Очки моей команды"
						value={battleFormStore.myTeamScore}
						onChange={battleFormStore.setMyTeamScore}
						min={0}
					/>
					<NumberInput
						label="Очки вражеской команды"
						value={battleFormStore.enemyTeamScore}
						onChange={battleFormStore.setEnemyTeamScore}
						min={0}
					/>
					<label className="field">
						<span>Звезды за игру</span>
						<select
							value={String(battleFormStore.starsDifference)}
							onChange={(event) => {
								battleFormStore.setStarsDifference(
									Number(event.currentTarget.value) as StarsDifferenceType,
								);
							}}
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
				value={battleFormStore.myHero}
				onChange={battleFormStore.setMyHero}
			/>
			<TeamInput
				title="Моя команда"
				value={battleFormStore.myTeam}
				onChange={battleFormStore.setMyTeam}
			/>
			<TeamInput
				title="Вражеская команда"
				value={battleFormStore.enemyTeam}
				onChange={battleFormStore.setEnemyTeam}
			/>

			<div className="actions-row">
				<button type="submit">Добавить игру</button>
			</div>

			{submitError && <p className="error-text">{submitError}</p>}
		</form>
	);
});
