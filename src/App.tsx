import { useState } from "react";
import { NewGameForm } from "./components/NewGameForm";
import { accountStartingRang, battls, type IBattle, type IRangInfo } from "./gamesInfo";

function App() {
	const [games, setGames] = useState<IBattle[]>(battls);
	const [rangInfo, setRangInfo] = useState<IRangInfo>(accountStartingRang);

	return (
		<main className="page">
			<NewGameForm
				onCreate={(newBattle, newRangInfo) => {
					setGames((prevGames) => [...prevGames, newBattle]);
					setRangInfo(newRangInfo);
				}}
			/>
			<section className="card">
				<h2>Текущее состояние</h2>
				<p>Всего игр: {games.length}</p>
				<p>
					Текущий ранг: {rangInfo.rangName} {rangInfo.rangNumber}, звезд: {rangInfo.stars}
				</p>
			</section>
		</main>
	);
}

export default App;
