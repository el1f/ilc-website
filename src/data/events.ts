export default [
	{
		address: "Piazza Lucio Dalla, Bologna, Metropolitan City of Bologna",
		coordinates: [44.510608, 11.339829],
		date: new Date("2023-03-05T11:00:00+0100"),
		image: "/events/20230305.png",
		key: "BO001",
		location: "Piazza Lucio Dalla, Bologna",
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
] as {
	slug: string;
	key: string;
	image: string;
	title: string;
	date: Date;
	location: string;
	address?: string;
	coordinates: [lat: number, lon: number];
}[];
