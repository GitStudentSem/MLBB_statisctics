import type { HeroesNameType } from "../heroesNames";
import {
	classIcons,
	type HeroInfoFormState,
	heroNames,
} from "./heroInfoForm.utils";
import { NumberInput } from "./NumberInput";

type HeroInfoInputProps = {
	title: string;

	value: HeroInfoFormState;
	onChange: (value: HeroInfoFormState) => void;
};

export function HeroInfoInput({ title, value, onChange }: HeroInfoInputProps) {
	return (
		<section className="hero-input card">
			<h3>{title}</h3>
			<div className="hero-input-grid">
				<label className="field">
					<span>Герой</span>
					<select
						value={value.heroName}
						onChange={(event) =>
							onChange({
								...value,
								heroName: event.currentTarget.value as HeroesNameType,
							})
						}
					>
						{heroNames.map((heroName) => (
							<option key={heroName} value={heroName}>
								{heroName}
							</option>
						))}
					</select>
				</label>
				<NumberInput
					label="Убийства"
					value={value.kill}
					onChange={(kill) => onChange({ ...value, kill })}
					min={0}
				/>
				<NumberInput
					label="Смерти"
					value={value.death}
					onChange={(death) => onChange({ ...value, death })}
					min={0}
				/>
				<NumberInput
					label="Помощь"
					value={value.help}
					onChange={(help) => onChange({ ...value, help })}
					min={0}
				/>
				<NumberInput
					label="Оценка"
					value={value.classPoints}
					onChange={(classPoints) => onChange({ ...value, classPoints })}
					min={0}
					step={0.1}
				/>
				<label className="field">
					<span>Иконка оценки</span>
					<select
						value={value.classIcon}
						onChange={(event) =>
							onChange({
								...value,
								classIcon: event.currentTarget
									.value as HeroInfoFormState["classIcon"],
							})
						}
					>
						{classIcons.map((classIcon) => (
							<option key={classIcon} value={classIcon}>
								{classIcon}
							</option>
						))}
					</select>
				</label>
			</div>
		</section>
	);
}
