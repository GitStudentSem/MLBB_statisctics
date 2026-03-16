import "./style.css";
import { createTeamSection } from "./components/teamSection";

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

battleForm.addEventListener("submit", (event) => {
	event.preventDefault();
});
