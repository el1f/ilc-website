import { Event } from "@/types/data";

export default [
	{
		address: "Piazza Lucio Dalla, Bologna, Metropolitan City of Bologna",
		attachments: [
			{
				author: "Eliflem Design",
				href: "/events/20230305.png",
				label: "Event poster • IG format",
				size: 2,
				type: "IMAGE",
			},
		],
		coordinates: [44.510608, 11.339829],
		date: new Date("2023-03-05T11:00:00+0100").toISOString(),
		gallery: [],
		image: "/events/20230305.png",
		key: "BO001",
		links: [
			{
				author: "lgbd_sebs",
				href: "https://www.instagram.com/p/CpczZseKYLH/",
				label: "Event Recap Reel",
				type: "INSTAGRAM",
			},
			{
				author: "trive",
				href: "https://drive.google.com/drive/folders/1jtmn8kuvxctZROwF3ehlbdr4J7wSapxS?usp=share_link",
				label: "Event photos • vol 1",
				type: "DRIVE",
			},
		],
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
	{
		address: "Piazza Lucio Dalla, Bologna, Metropolitan City of Bologna",
		attachments: [
			{
				author: "Eliflem Design",
				href: "/events/20230430.jpg",
				label: "Event poster • IG format",
				size: 2,
				type: "IMAGE",
			},
		],
		coordinates: [44.510608, 11.339829],
		date: new Date("2023-04-30T11:00:00+0100").toISOString(),
		gallery: [],
		image: "/events/20230430.jpg",
		key: "BO002",
		links: [],
		location: "Piazza Lucio Dalla, Bologna",
		presentRiders: ["lgbdsebs", "aabassayoub"],
		slug: "20230305-bologna",
		title: "Meetup Lucio Dalla",
	},
] as Event[];
