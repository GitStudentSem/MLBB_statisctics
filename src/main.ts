import "./style.css";
import { createTeamSection } from "./components/teamSection";
import { defaultBattleValues } from "./fixtures/defaultBattle";
import { battls } from "./gamesInfo";
import { fillBattleForm } from "./parsers/battleFormFiller";
import { parseBattleForm } from "./parsers/battleParser";

const battleForm = document.querySelector<HTMLFormElement>("#battle-form");
const myTeamSection =
	document.querySelector<HTMLDivElement>("#my-team-section");
const enemyTeamSection = document.querySelector<HTMLDivElement>(
	"#enemy-team-section",
);

if (!battleForm || !myTeamSection || !enemyTeamSection) {
	throw new Error("One or more required elements were not found");
}

myTeamSection.innerHTML = createTeamSection("myTeam", "Союзная команда");
enemyTeamSection.innerHTML = createTeamSection(
	"enemyTeam",
	"Вражеская команда",
);
fillBattleForm(battleForm, defaultBattleValues);

battleForm.addEventListener("submit", (event) => {
	event.preventDefault();

	try {
		const battle = parseBattleForm(battleForm);
		battls.push(battle);
		console.log("Матч сохранен:", battle);
		console.log("Всего матчей:", battls.length);
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Не удалось распарсить форму";
		console.error(message);
		alert(message);
	}
});
