import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Calendar, CaretDown, CaretUp, Chat, Path } from "phosphor-react";
import React, { useState } from "react";

import { ImageWithFallback } from "@/components/ImageWithFallback";
import { RiderCard } from "@/components/RiderCard";
import EVENTS from "@/data/events";
import RIDERS from "@/data/riders";
import { getDirectionsLink } from "@/helpers/getDirectionsLink";
import { Event as EventData, Rider } from "@/types/data";

const EventAction: React.FC<{
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

const Event: NextPage<{
	event: EventData;
	riders: Rider;
}> = ({ event, riders }) => {
	const [isRidersExtended, setIsRiderExtended] = useState(false);

	const isPast = dayjs(event.date).isBefore(dayjs());
	const coordsDirectionsLink = getDirectionsLink(
		event.coordinates,
		event.address,
	);

	return (
		<>
			<Head>
				<title>{event.title}</title>
			</Head>

			<main>
				<div className="px-6 pt-40 md:pt-64 md:px-0">
					<header className="container flex max-w-6xl gap-12 mx-auto mb-32">
						<div
							className={`flex-grow-0 bg-zinc-900 flex-shrink-0 w-full max-w-md aspect-[1080/1350] relative`}
						>
							<ImageWithFallback
								src={event.image}
								alt={`Cover picture for the event`}
								fill
							/>
						</div>
						<div className="md:py-12">
							<p className="mb-3 text-lg font-bold tracking-widest text-zinc-400 ">
								{`${dayjs(event.date).format("DD MMM YYYY")} • 
								${event.location}`.toLocaleUpperCase()}
							</p>
							<h1 className="mb-4 font-extrabold uppercase text-[160px] leading-none font-display">
								{event.title}
							</h1>
						</div>
					</header>
				</div>

				<section className="px-6 mb-8 md:md-16 md:px-0" id="actions">
					<div className="container grid max-w-4xl grid-cols-3 gap-4 mx-auto mb-32">
						<EventAction
							label="Add event to your calendar"
							icon={<Calendar className="w-12 h-12" />}
							onClick={() => alert("This hasn't been implemented yet :D")}
						/>
						<EventAction
							href="https://ig.me/m/italianlongboardcollective"
							label="Ask for further details"
							icon={<Chat className="w-12 h-12" />}
						/>
						<EventAction
							href={coordsDirectionsLink}
							label="Get directions to the spot"
							icon={<Path className="w-12 h-12" />}
						/>
					</div>
				</section>

				<section className="px-6 mb-8 md:md-16 md:px-0" id="riders">
					<div className="container max-w-6xl grid-cols-3 mx-auto mb-32">
						<div className="flex justify-between">
							<h3 className="mb-4 text-5xl font-bold uppercase font-display">
								Present Riders
							</h3>
							<button
								className="flex items-center h-12 gap-2 px-6 font-bold tracking-wide border rounded border-zinc-500 hover:border-zinc-400 text-zinc-500 hover:text-zinc-50 tabular-nums"
								onClick={() => {
									setIsRiderExtended(!isRidersExtended);
								}}
							>
								{isRidersExtended ? (
									<CaretUp className="w-5 h-5" />
								) : (
									<CaretDown className="w-5 h-5" />
								)}
								{isRidersExtended ? "Show less" : "Show more"}
							</button>
						</div>
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
							{(isRidersExtended ? RIDERS : RIDERS.slice(0, 4)).map((rider) => (
								<RiderCard
									image={rider.image}
									name={rider.name}
									city={rider.city}
									dynamic
								/>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const event = EVENTS.filter((event) => event.slug === params?.slug)[0] ?? {};

	const riders = RIDERS.filter((rider) =>
		event.presentRiders?.includes(rider.handle),
	);

	return {
		props: {
			event,
			riders,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = EVENTS.map((event) => `/events/${event.slug}`) ?? [];

	return {
		fallback: false,
		paths: paths,
	};
};

export default Event;
