export type Discipline =
	| "DANCING"
	| "FREESTYLE"
	| "FREERIDE"
	| "DOWNHILL"
	| "SURFSKATE";

export interface Event {
	slug: string;
	key: string;
	image: string;
	title: string;
	date: string;
	location: string;
	address?: string;
	coordinates: [lat: number, lon: number];
	presentRiders?: string[];
	gallery?: Picture[];
	links?: {
		href: string;
		label: string;
		platform: string;
		author: string;
	}[];
	attachments?: {
		href: string;
		label: string;
		platform: string;
		author: string;
	}[];
	spotId?: string;
}

export interface Rider {
	image?: string;
	name: string;
	city: string;
	handle: string;
	links: Record<"INSTAGRAM" | "WEBSITE", string>;
	disciplines: Discipline[];
}

export interface Picture {
	src: string;
	thumbnail?: string;
	author: string;
	featuredRiders?: string[];
	featuredBrands?: string[];
}
