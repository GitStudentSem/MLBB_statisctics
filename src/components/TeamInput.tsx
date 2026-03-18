import { HeroInfoInput } from "./HeroInfoInput";
import type { HeroInfoFormState } from "./heroInfoForm.utils";

type TeamInputProps = {
	title: string;
	value: HeroInfoFormState[];
	onChange: (value: HeroInfoFormState[]) => void;
};

export function TeamInput({ title, value, onChange }: TeamInputProps) {
	return (
		<section className="card">
			<h2>{title}</h2>
			<div className="team-grid">
				{value.map((hero, index) => (
					<HeroInfoInput
						key={`${title}-${index + 1}`}
						title={`Игрок ${index + 1}`}
						value={hero}
						onChange={(nextHero) =>
							onChange(
								value.map((currentHero, heroIndex) =>
									heroIndex === index ? nextHero : currentHero,
								),
							)
						}
					/>
				))}
			</div>
		</section>
	);
}
