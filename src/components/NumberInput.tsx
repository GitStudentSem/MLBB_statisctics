type NumberInputProps = {
	label: string;
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
};

export function NumberInput({
	label,
	value,
	onChange,
	min,
	max,
	step = 1,
}: NumberInputProps) {
	return (
		<label className="field">
			<span>{label}</span>
			<input
				type="number"
				value={value}
				onChange={(event) => onChange(event.currentTarget.valueAsNumber || 0)}
				min={min}
				max={max}
				step={step}
			/>
		</label>
	);
}
