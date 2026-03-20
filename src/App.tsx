import { NewGameForm } from "./components/NewGameForm";
import { accountStartingRang, battls } from "./gamesInfo";
import { calculateClassPointRanges } from "./utils/classRanges";

function App() {
	calculateClassPointRanges();
	return (
		<main className="page">
			<NewGameForm />
			<section className="card">
				<h2>Текущее состояние</h2>
				<p>Всего игр: {battls.length}</p>
				<p>
					Текущий ранг: {accountStartingRang.rangName}{" "}
					{accountStartingRang.rangNumber}, звезд: {accountStartingRang.stars}
				</p>
			</section>
		</main>
	);
}

export default App;
