import { useState } from "react";
import { NewGameForm } from "./components/NewGameForm";
import { accountStartingRang, battls, type IBattle } from "./gamesInfo";

function App() {
	const [games, setGames] = useState<IBattle[]>(battls);

	return (
		<main className="page">
			<NewGameForm
				onCreate={(newBattle) => {
					setGames((prevGames) => [...prevGames, newBattle]);
				}}
			/>
			<section className="card">
				<h2>Текущее состояние</h2>
				<p>Всего игр: {games.length}</p>
				<p>
					Текущий ранг: {accountStartingRang.rangName}{" "}
					{accountStartingRang.rangNumber}, звезд: {accountStartingRang.stars}
				</p>
			</section>
		</main>
	);
}

export default App;
