import { createHeroSection } from "./heroSection";

export const createTeamSection = (teamKey: "myTeam" | "enemyTeam", title: string) =>
	Array.from({ length: 5 }, (_, index) =>
		createHeroSection(`${teamKey}[${index}]`, `${title}: герой ${index + 1}`),
	).join("");
