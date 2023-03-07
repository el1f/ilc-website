import clsx from "clsx";
import dayjs from "dayjs";
import Link from "next/link";
import { Calendar, Chat, MapPin, Path } from "phosphor-react";
import React from "react";

import { getDirectionsLink } from "@/helpers/getDirectionsLink";

import { ImageWithFallback } from "./ImageWithFallback";

export interface EventCardProps {
	key: string;
	image: string;
	title: string;
	date: Date;
	location: string;
	address?: string;
	coordinates: [lat: number, lon: number];
	isPast?: boolean;
}

const EventCardAction: React.FC<{
	icon: JSX.Element;
	label: string;
	href?: string;
	onClick?: () => void;
}> = ({ icon, label, href, onClick }) => {
	const content = (
		<div className="flex items-center gap-4 p-4 border rounded border-zinc-600">
			{icon}

			<div className="flex flex-col">
				<p className="text-lg">{label}</p>
			</div>
		</div>
	);

	if (href)
		return (
			<Link className="w-full" href={href} onClick={onClick}>
				{content}
			</Link>
		);

	return content;
};

export const EventCard: React.FC<EventCardProps> = ({
	key,
	image,
	title,
	date,
	location,
	address,
	coordinates,
	isPast = false,
}) => {
	const coordsDirectionsLink = getDirectionsLink(coordinates, address);

	return (
		<div
			key={key}
			className={clsx(
				"flex w-full border border-white/20 p-4 rounded-lg flex-col",
				{
					"gap-4 md:gap-6": isPast,
					"gap-8 md:gap-16 md:flex-row": !isPast,
				},
			)}
		>
			<div
				className={`flex-grow-0 bg-zinc-900 flex-shrink-0 w-full max-w-sm aspect-[1080/1350] relative`}
			>
				<ImageWithFallback src={image} alt="Hype picture for the event" fill />
			</div>
			<div
				className={clsx(
					"w-full gap-2 flex-shrink-1 flex-grow-1 flex justify-between flex-col",
					{
						"md:py-8": !isPast,
					},
				)}
			>
				<div>
					<h5
						className={clsx(
							"text-2xl tracking-wide uppercase font-display text-zinc-400",
							{
								"text-xl": isPast,
							},
						)}
					>
						{dayjs(date).format("DD MMM YYYY")}
					</h5>
					<h3
						className={clsx("text-5xl font-bold uppercase font-display", {
							"text-3xl": isPast,
						})}
					>
						{title}
					</h3>
				</div>

				{isPast && (
					<div className="flex flex-col w-full gap-4 mt-2">
						<div className="flex items-center gap-2">
							<MapPin className="w-5 h-5" />

							<p className="text-sm">{location}</p>
						</div>
					</div>
				)}

				{isPast || (
					<div className="flex flex-col w-full gap-4 mt-4">
						<EventCardAction
							label="Add event to your calendar"
							icon={<Calendar className="w-12 h-12" />}
							onClick={() => alert("This hasn't been implemented yet :D")}
						/>
						<EventCardAction
							href="https://ig.me/m/italianlongboardcollective"
							label="Ask for further details"
							icon={<Chat className="w-12 h-12" />}
						/>
						<EventCardAction
							href={coordsDirectionsLink}
							label="Get directions to the spot"
							icon={<Path className="w-12 h-12" />}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
