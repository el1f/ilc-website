export default [
	{
		city: "Lucca",
		handle: "lgbdsebs",
		image: "/riders/lgbdsebs.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/lgbdsebs/",
		},
		name: "Sebastian Francesconi",
	},
	{
		city: "Padua",
		handle: "aabassayoub",
		image: "/riders/aabassayoub.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/aabassayoub/",
		},
		name: "Ayoub Aabass",
	},
	{
		city: "Lucca",
		handle: "marco_3drac",
		image: "/riders/marcocardella.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/marco_3drac/",
		},
		name: "Marco Cardella",
	},
	{
		city: "Roma",
		handle: "dmrmrc",
		image: "/riders/dmrmrc.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/dmrmrc/",
		},
		name: "Marco De Maria",
	},
	{
		city: "Vicenza",
		handle: "lucatrapani_lgbd",
		image: "/riders/lucatrapani.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/lucatrapani_lgbd/",
		},
		name: "Luca Trapani",
	},
	{
		city: "Italy",
		handle: "lelondd",
		image: null,
		links: {
			INSTAGRAM: "https://www.instagram.com/lelondd/",
		},
		name: "Lele",
	},
	{
		city: "Treviso",
		handle: "francesco_bagatella",
		image: null,
		links: {
			INSTAGRAM: "https://www.instagram.com/francesco_bagatella/",
		},
		name: "Francesco Bagatella",
	},
	{
		city: "Rimini",
		handle: "chisioleggiadro",
		image: "/riders/chisioleggiadro.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/chisioleggiadro/",
		},
		name: "Marco Ricci",
	},
	{
		city: "Venezia",
		handle: "andreabenfante",
		image: "/riders/andreabenfante.jpg",
		name: "Andrea Benfante",
	},
] as {
	image?: string;
	name: string;
	city: string;
	handle: string;
	links: Record<"INSTAGRAM" | "WEBSITE", string>;
}[];
