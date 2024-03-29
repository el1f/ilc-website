import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
	Calendar,
	CaretDown,
	CaretLeft,
	CaretRight,
	CaretUp,
	Chat,
	FileImage,
	FilePdf,
	GlobeSimple,
	GoogleLogo,
	InstagramLogo,
	Path,
} from "phosphor-react";
import React, { Fragment, useRef, useState } from "react";
import useSwr from "swr";

import { ImageWithFallback } from "@/components/ImageWithFallback";
import { RiderCard } from "@/components/RiderCard";
import EVENTS from "@/data/events";
import RIDERS from "@/data/riders";
import { getDirectionsLink } from "@/helpers/getDirectionsLink";
import { getRiders } from "@/helpers/notion/getRiders";
import {
	Event as EventData,
	EventAttachment,
	EventImage,
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
	// authorLink,
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
	// authorLink,
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
		// error: galleryError,
		// isLoading: isGalleryLoading,
	} = useSwr<{
		pictures: EventImage[];
	}>("/api/event/gallery", fetcher);
	const galleryRef = useRef<HTMLDivElement>(null);

	const [isRidersExtended, setIsRiderExtended] = useState(false);
	const [galleryPage, setGalleryPage] = useState(0);
	const [activeImage, setActiveImage] = useState<EventImage | null>(null);
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
								priority
							/>
						</div>
						<div className="md:py-12">
							{/* <p className="mb-3 text-lg font-bold tracking-widest text-zinc-400 ">
								{`${dayjs(event.date).format("DD MMM YYYY")} • 
								${event.location}`.toUpperCase()}
							</p> */}
							<h1 className="mb-4 font-extrabold uppercase text-8xl md:text-[160px] leading-none font-display">
								{event.title}
							</h1>
						</div>
					</header>
				</div>

				{!isPast && (
					<section className="px-6 mb-8 md:md-16 md:px-0" id="actions">
						<div className="container grid max-w-4xl grid-cols-1 gap-4 mx-auto mb-32 md:grid-cols-3">
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
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-4xl font-bold leading-none uppercase md:text-6xl font-display">
								Known Riders
							</h3>
							<button
								className="items-center hidden h-12 gap-2 px-6 font-bold tracking-wide border rounded md:flex border-zinc-500 hover:border-zinc-400 text-zinc-500 hover:text-zinc-50 tabular-nums"
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
							{(isRidersExtended ? riders : riders.slice(0, 4)).map(
								(rider, i) => (
									<RiderCard
										image={rider.image}
										name={rider.name}
										city={rider.city}
										dynamic
										isPriority={i < 4}
									/>
								),
							)}

							<button
								className="flex items-center justify-center h-12 gap-2 px-6 font-bold tracking-wide border rounded border-zinc-500 hover:border-zinc-400 text-zinc-500 hover:text-zinc-50 tabular-nums md:hidden"
								onClick={() => {
									setIsRiderExtended(!isRidersExtended);
								}}
							>
								{isRidersExtended ? (
									<CaretUp className="w-5 h-5" />
								) : (
									<CaretDown className="w-5 h-5" />
								)}
								{isRidersExtended ? "Show less" : "Show all"}
							</button>
						</div>
					</div>
				</section>

				<section className="px-6 mb-8 md:md-16 md:px-0" id="content">
					<div className="container grid max-w-6xl mx-auto mb-32 md:gap-12 md:grid-cols-3">
						<aside>
							<section className="mb-8 md:mb-16">
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

							<section className="mb-8 md:mb-16">
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
							className="flex flex-col md:col-span-2"
						>
							<div className="flex justify-between">
								<h3 className="mb-4 text-4xl font-bold uppercase font-display">
									Gallery
									<small className="text-zinc-400">{` / P${
										galleryPage + 1
									}`}</small>
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

							<div className="grid w-full gap-6 mb-4 md:grid-cols-3">
								{gallery?.pictures
									.slice(
										galleryPage * PAGE_SIZE,
										pageEnd > gallery?.pictures.length
											? gallery?.pictures.length
											: pageEnd,
									)
									.map((image) => (
										<div
											key={image.id}
											className="relative w-full aspect-[4/3] bg-zinc-900 rounded overflow-hidden cursor-pointer hover:scale-105 transition"
											onClick={() => {
												setActiveImage(image);
											}}
										>
											<Image src={image.thumbnail} alt="" fill />
										</div>
									))}
							</div>

							{/* Desktop pagination */}
							<div className="hidden gap-2 ml-auto md:flex">
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

							{/* Mobile pagination */}
							<div className="flex gap-2 ml-auto md:hidden">
								<button
									onClick={() => {
										setGalleryPage(galleryPage - 1);
										executeScroll();
									}}
									className={clsx(
										"w-10 h-10 text-sm border rounded-full border-zinc-400",
									)}
								>
									<CaretLeft className="w-6 h-6 mx-auto" />
								</button>
								<button
									onClick={() => {
										setGalleryPage(galleryPage + 1);
										executeScroll();
									}}
									className={clsx(
										"w-10 h-10 text-sm border rounded-full border-zinc-400",
									)}
								>
									<CaretRight className="w-6 h-6 mx-auto" />
								</button>
							</div>
						</section>
					</div>
				</section>
			</main>

			<Transition appear show={Boolean(activeImage)} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={() => setActiveImage(null)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="relative flex items-center justify-center h-screen min-h-full text-center pt-28 md:pt-16 md:p-16">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="relative w-screen min-h-full transition-all transform bg-zinc-900 rounded-2xl">
									<a
										className="absolute z-20 flex items-center h-12 px-6 font-sans font-bold tracking-wide rounded top-4 right-4 bg-zinc-50 hover:bg-zinc-200 text-zinc-900"
										href={activeImage?.download}
										download={true}
										target="_blank"
									>
										Download Picture
									</a>
									<Image
										src={activeImage?.lightbox ?? ""}
										style={{
											objectFit: "contain",
										}}
										alt=""
										fill
									/>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const event = EVENTS.filter((event) => event.slug === params?.slug)[0] ?? {};

	const riders = await getRiders();

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
