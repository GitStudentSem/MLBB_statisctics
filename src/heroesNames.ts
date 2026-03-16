type HeroMeta = { name: string; icon: string };

export const heroes = {
	belerik: { name: "Белерик", icon: "" },
	hanabi: { name: "Ханаби", icon: "" },
	gossen: { name: "Госсен", icon: "" },
	gvinevra: { name: "Гвиневра", icon: "" },
	sicilion: { name: "Сисилион", icon: "" },
	miya: { name: "Мия", icon: "" },
	veil: { name: "Вейл", icon: "" },
	badang: { name: "Баданг", icon: "" },
	alisa: { name: "Алиса", icon: "" },
	angela: { name: "Ангела", icon: "" },
	tigril: { name: "Тигрил", icon: "" },
	harit: { name: "Харит", icon: "" },
	clint: { name: "Клинт", icon: "" },
	terizla: { name: "Теризла", icon: "" },
	nolan: { name: "Нолан", icon: "" },
	franko: { name: "Франко", icon: "" },
	liliya: { name: "Лилия", icon: "" },
	brody: { name: "Броуди", icon: "" },
	liSunSin: { name: "Ли Сун Син", icon: "" },
	lolita: { name: "Лолита", icon: "" },
	eymon: { name: "Эймон", icon: "" },
	fanny: { name: "Фанни", icon: "" },
	nana: { name: "Нана", icon: "" },
	estes: { name: "Эстес", icon: "" },
	ksavier: { name: "Ксавьер", icon: "" },
	helcart: { name: "Хелкарт", icon: "" },
	moskov: { name: "Москов", icon: "" },
	bein: { name: "Бейн", icon: "" },
} as const satisfies Record<string, HeroMeta>;

export type HeroId = keyof typeof heroes;
export type HeroesNameType = (typeof heroes)[HeroId]["name"];