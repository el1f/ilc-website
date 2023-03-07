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
	links?: EventLink[];
	attachments?: EventAttachment[];
	spotId?: string;
}

export type LinkType = "INSTAGRAM" | "WEB" | "DRIVE";

export interface EventLink {
	href: string;
	label: string;
	type: LinkType;
	author: string;
	authorLink?: string;
}

export type AttachmentType = "PDF" | "IMAGE";

export interface EventAttachment {
	href: string;
	label: string;
	type: AttachmentType;
	author: string;
	authorLink?: string;
	size: number;
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
