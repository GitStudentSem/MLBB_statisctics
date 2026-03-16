const classIconOptions = [
	"Шоколад",
	"Серебро",
	"Золото",
	"МВП победившей команды",
	"МВП проигравей команды",
];

export const createHeroSection = (prefix: string, title: string) => `
	<fieldset class="card">
		<legend>${title}</legend>
		<label>
			<span>Имя героя</span>
			<input type="text" name="${prefix}.heroName" placeholder="Например, Tigreal" />
		</label>

		<div class="grid grid-3">
			<label>
				<span>K (убийства)</span>
				<input type="number" min="0" step="1" name="${prefix}.kda.kill" />
			</label>
			<label>
				<span>D (смерти)</span>
				<input type="number" min="0" step="1" name="${prefix}.kda.death" />
			</label>
			<label>
				<span>A (помощь)</span>
				<input type="number" min="0" step="1" name="${prefix}.kda.help" />
			</label>
		</div>

		<div class="grid grid-2">
			<label>
				<span>Класс (очки)</span>
				<input type="number" min="3" step="0.1" name="${prefix}.class.points" />
			</label>
			<label>
				<span>Иконка класса</span>
				<select name="${prefix}.class.icon">
					${classIconOptions
						.map((iconName) => {
							const selected = iconName === "Золото" ? "selected" : "";
							return `<option value="${iconName}" ${selected}>${iconName}</option>`;
						})
						.join("")}
				</select>
			</label>
		</div>
	</fieldset>
`;
