export default [
	{
		city: "Lucca",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "lgbdsebs",
		image: "/riders/lgbdsebs.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/lgbdsebs/",
		},
		name: "Sebastian Francesconi",
	},
	{
		city: "Padua",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "aabassayoub",
		image: "/riders/aabassayoub.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/aabassayoub/",
		},
		name: "Ayoub Aabass",
	},
	{
		city: "Lucca",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "marco_3drac",
		image: "/riders/marcocardella.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/marco_3drac/",
		},
		name: "Marco Cardella",
	},
	{
		city: "Roma",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "dmrmrc",
		image: "/riders/dmrmrc.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/dmrmrc/",
		},
		name: "Marco De Maria",
	},
	{
		city: "Vicenza",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "lucatrapani_lgbd",
		image: "/riders/lucatrapani.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/lucatrapani_lgbd/",
		},
		name: "Luca Trapani",
	},
	{
		city: "Italy",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "lelondd",
		image: null,
		links: {
			INSTAGRAM: "https://www.instagram.com/lelondd/",
		},
		name: "Lele",
	},
	{
		city: "Treviso",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "francesco_bagatella",
		image: null,
		links: {
			INSTAGRAM: "https://www.instagram.com/francesco_bagatella/",
		},
		name: "Francesco Bagatella",
	},
	{
		city: "Rimini",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "chisioleggiadro",
		image: "/riders/chisioleggiadro.jpg",
		links: {
			INSTAGRAM: "https://www.instagram.com/chisioleggiadro/",
		},
		name: "Marco Ricci",
	},
	{
		city: "Venezia",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "andreabenfante",
		image: "/riders/andreabenfante.jpg",
		name: "Andrea Benfante",
	},
	{
		city: "Vicenza",
		disciplines: ["DOWNHILL", "FREERIDE", "FREESTYLE"],
		handle: "ismabarci",
		image: "/riders/ismabarci.jpg",
		name: "Ismael Barci",
	},
	{
		city: "Roma",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "valebiii",
		image: "/riders/valebiii.jpg",
		name: "Valentina Burla",
	},
	{
		city: "Roma",
		disciplines: ["DOWNHILL", "FREERIDE", "SURFSKATE"],
		handle: "romaskatetour",
		image: "/riders/romaskatetour.jpg",
		name: "Giovanni Ferraro",
	},
	{
		city: "Padua",
		disciplines: ["DANCING", "FREESTYLE"],
		handle: "trive",
		image: "/riders/trive.jpg",
		name: "Alessandro Trivellato",
	},
] as {
	image?: string;
	name: string;
	city: string;
	handle: string;
	links: Record<"INSTAGRAM" | "WEBSITE", string>;
}[];
