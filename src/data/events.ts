import { Event } from "@/types/data";

export default [
	{
		address: "Piazza Lucio Dalla, Bologna, Metropolitan City of Bologna",
		coordinates: [44.510608, 11.339829],
		date: new Date("2023-03-05T11:00:00+0100").toISOString(),
		image: "/events/20230305.png",
		key: "BO001",
		location: "Piazza Lucio Dalla, Bologna",
		presentRiders: [
			"lgbdsebs",
			"aabassayoub",
			"lucatrapani_lgbd",
			"lelondd",
			"francesco_bagatella",
			"chisioleggiadro",
			"ismabarci",
			"valebiii",
			"romaskatetour",
			"trive",
			"wanka",
		],
		slug: "20230305-bologna",
		title: "Meetup Lucio Dalla",
	},
	// {
	// 	address: "Piazza Lucio Dalla, Bologna, Metropolitan City of Bologna",
	// 	coordinates: [44.510608, 11.339829],
	// 	date: new Date("2023-03-05T11:00:00+0100"),
	// 	image: "/events/20230305.png",
	// 	key: "BO001",
	// 	location: "Piazza Lucio Dalla, Bologna",
	// 	title: "Meetup Lucio Dalla",
	// },
] as Event[];
