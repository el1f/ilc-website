import clsx from "clsx";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
	Calendar,
	CaretDown,
	CaretUp,
	Chat,
	FileImage,
	FilePdf,
	GlobeSimple,
	GoogleLogo,
	InstagramLogo,
	Path,
} from "phosphor-react";
import React, { useRef, useState } from "react";
import useSwr from "swr";

import { ImageWithFallback } from "@/components/ImageWithFallback";
import { RiderCard } from "@/components/RiderCard";
import EVENTS from "@/data/events";
import RIDERS from "@/data/riders";
import { getDirectionsLink } from "@/helpers/getDirectionsLink";
import {
	Event as EventData,
	EventAttachment,
	EventLink,
	Rider,
} from "@/types/data";

const ATTACHMENT_ICONS = {
	IMAGE: <FileImage className="w-8 h-8" />,
	PDF: <FilePdf className="w-8 h-8" />,
} as const;

const LINK_ICONS = {
	DRIVE: <GoogleLogo className="w-8 h-8" />,
	INSTAGRAM: <InstagramLogo className="w-8 h-8" />,
	WEB: <GlobeSimple className="w-8 h-8" />,
} as const;

const EventAction: React.FC<{
	icon: JSX.Element;
	label: string;
	href?: string;
	onClick?: () => void;
}> = ({ icon, label, href, onClick }) => {
	const content = (
		<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
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

const EventAttachmentCard: React.FC<EventAttachment> = ({
	href,
	label,
	type,
	author,
	authorLink,
	size,
}) => {
	const icon = ATTACHMENT_ICONS[type];

	return (
		<a href={href} download>
			<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
				{icon}
				<div className="flex flex-col gap-2">
					<p className="text-lg font-bold leading-none line-clamp-1">{label}</p>
					<p className="flex gap-1 text-sm text-zinc-400">
						<span className="leading-none">{`${size}Mb`}</span>
						<span className="leading-none">•</span>
						{/* <Link
							href={authorLink ?? ""}
							className="text-sm leading-none text-zinc-400 hover:underline"
						>
							{author}
						</Link> */}
						<span className="text-sm leading-none text-zinc-400 hover:underline">
							{author}
						</span>
					</p>
				</div>
			</div>
		</a>
	);
};

const EventLinkCard: React.FC<EventLink> = ({
	href,
	label,
	type,
	author,
	authorLink,
}) => {
	const icon = LINK_ICONS[type];

	return (
		<Link href={href} target="_blank">
			<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
				{icon}
				<div className="flex flex-col gap-2">
					<p className="text-lg font-bold leading-none line-clamp-1">{label}</p>
					{/* <Link
						href={authorLink ?? ""}
						className="text-sm leading-none text-zinc-400 hover:underline"
					>
						{author}
					</Link> */}
					<p className="text-sm leading-none text-zinc-400 hover:underline">
						{author}
					</p>
				</div>
			</div>
		</Link>
	);
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PAGE_SIZE = 30;

const Event: NextPage<{
	event: EventData;
	riders: Rider[];
}> = ({ event, riders }) => {
	const {
		data: gallery,
		error: galleryError,
		isLoading: isGalleryLoading,
	} = useSwr<{
		pictures: string[];
	}>("/api/event/gallery", fetcher);
	const galleryRef = useRef<HTMLDivElement>(null);

	const [isRidersExtended, setIsRiderExtended] = useState(false);
	const [galleryPage, setGalleryPage] = useState(0);
	const pageEnd = (galleryPage + 1) * PAGE_SIZE;

	const isPast = dayjs(event.date).isBefore(dayjs());
	const coordsDirectionsLink = getDirectionsLink(
		event.coordinates,
		event.address,
	);

	const executeScroll = () => galleryRef.current?.scrollIntoView();

	return (
		<>
			<Head>
				<title>{event.title}</title>
			</Head>

			<main>
				<div className="px-6 pt-40 md:pt-64 md:px-0">
					<header className="container flex flex-col max-w-6xl gap-12 mx-auto mb-32 md:flex-row">
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
							{/* <p className="mb-3 text-lg font-bold tracking-widest text-zinc-400 ">
								{`${dayjs(event.date).format("DD MMM YYYY")} • 
								${event.location}`.toUpperCase()}
							</p> */}
							<h1 className="mb-4 font-extrabold uppercase text-[160px] leading-none font-display">
								{event.title}
							</h1>
						</div>
					</header>
				</div>

				{!isPast && (
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
				)}

				<section className="px-6 mb-8 md:md-16 md:px-0" id="riders">
					<div className="container max-w-6xl grid-cols-3 mx-auto mb-32">
						<div className="flex justify-between">
							<h3 className="mb-4 text-6xl font-bold uppercase font-display">
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

				<section className="px-6 mb-8 md:md-16 md:px-0" id="content">
					<div className="container grid max-w-6xl grid-cols-3 gap-12 mx-auto mb-32">
						<aside>
							<section className="mb-16">
								<h3 className="mb-4 text-4xl font-bold uppercase font-display">
									Attachments
								</h3>

								<div>
									{event.attachments?.map((attachment) => {
										return (
											<EventAttachmentCard
												href={attachment.href}
												key={attachment.href}
												label={attachment.label}
												size={attachment.size}
												type={attachment.type}
												author={attachment.author}
												authorLink={attachment.authorLink}
											/>
										);
									})}
								</div>
							</section>

							<section>
								<h3 className="mb-4 text-4xl font-bold uppercase font-display">
									Links
								</h3>

								<div className="flex flex-col gap-4">
									{event.links?.map((link) => (
										<EventLinkCard
											href={link.href}
											key={link.href}
											label={link.label}
											type={link.type}
											author={link.author}
											authorLink={link.authorLink}
										/>
									))}
								</div>
							</section>
						</aside>

						<section
							ref={galleryRef}
							id="gallery"
							className="flex flex-col col-span-2"
						>
							<div className="flex justify-between">
								<h3 className="mb-4 text-4xl font-bold uppercase font-display">
									Gallery
								</h3>
							</div>

							<div className="p-4 mb-6 text-center border rounded-lg border-zinc-600">
								<h5 className="text-2xl font-bold tracking-wide uppercase font-display">
									Filters coming soon
								</h5>
								<p className="max-w-lg mx-auto text-zinc-400">
									The gallery is going to soon be enhanced with the possibility
									of browing the pictures based on the rider and photographer to
									make it easier to find your pictures so stay tuned!
								</p>
							</div>

							<div className="grid w-full grid-cols-3 gap-6 mb-4">
								{gallery?.pictures
									.slice(
										galleryPage * PAGE_SIZE,
										pageEnd > gallery?.pictures.length
											? gallery?.pictures.length
											: pageEnd,
									)
									.map((href) => (
										<div
											key={href}
											className="relative w-full aspect-[4/3] bg-zinc-900 rounded overflow-hidden"
										>
											<Image src={href} alt="" fill />
										</div>
									))}
							</div>

							<div className="flex gap-2 ml-auto">
								{[
									...new Array(
										Math.ceil((gallery?.pictures.length ?? 0) / PAGE_SIZE),
									),
								].map((_, i) => (
									<button
										onClick={() => {
											setGalleryPage(i);
											executeScroll();
										}}
										className={clsx(
											"w-10 h-10 text-sm border rounded-full border-zinc-400",
											{ "bg-zinc-50 text-zinc-900": i === galleryPage },
										)}
									>
										{i + 1}
									</button>
								))}
							</div>
						</section>
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
			event: {
				...event,
				attachments:
					event.attachments?.map((attachment) => {
						const rider = RIDERS.find(
							(rider) => rider.handle === attachment.author,
						);

						return {
							...attachment,
							author: rider?.name ?? attachment.author,
							authorLink: "",
						};
					}) ?? [],
				links:
					event.links?.map((link) => {
						const rider = RIDERS.find((rider) => rider.handle === link.author);

						return {
							...link,
							author: rider?.name ?? link.author,
							authorLink: "",
						};
					}) ?? [],
			},
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
