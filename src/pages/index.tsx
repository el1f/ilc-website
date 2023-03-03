import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Calendar, CaretLeft, CaretRight, Chat, Path } from "phosphor-react";
import { useRef, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RiderCard } from "@/components/RiderCard";
import { RiderCardMore } from "@/components/RiderCardMore";
import EVENTS from "@/data/events";
import RIDERS from "@/data/riders";

export default function Home() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<>
			<Head>
				<title>ILC • Italian Longboard Collective</title>
				<meta
					name="description"
					content="We are a self-funded and independent project started by a group of italian riders with the aim of amplifying the voices of some of Italy's best riders and most promising talents, showcasing their skills on a global scale in order to fuel a more vibrant local scene."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/brand/logo.svg" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="ILC • Italian Longboard Collective"
				/>
				<meta
					property="og:url"
					content="https://italianlongboardcollective.com"
				/>
				<meta
					property="og:image"
					content="https://italianlongboardcollective.com/assets/ilc-og.png"
				/>
				<meta
					property="og:description"
					content="We are a self-funded and independent project started by a group of italian riders with the aim of amplifying the voices of some of Italy's best riders and most promising talents, showcasing their skills on a global scale in order to fuel a more vibrant local scene."
				></meta>
			</Head>

			<Navbar />

			<main>
				<section className="py-64">
					<div className="container max-w-4xl mx-auto">
						<h2 className="font-display uppercase font-black text-[75.3vw] leading-[0.75] min-[896px]:text-[676px]">
							Ciao
						</h2>
						<h1 className="font-display uppercase font-black flex flex-col text-[22.8vw] text-justify leading-[0.75] min-[896px]:text-[204.3px]">
							<span className="tracking-[1.2vw] min-[896px]:tracking-[10.9px]">
								introducing
							</span>
							italy's finest longboarders
						</h1>
					</div>
				</section>

				{EVENTS.length > 0 && (
					<section id="next-events" className="px-6 mb-48">
						<div className="container max-w-4xl mx-auto">
							<div className="mb-8 text-center">
								<h6 className="mb-2 text-lg font-medium uppercase opacity-50 display">
									MEETUP ALERT ENGAGED
								</h6>
								<h2 className="font-extrabold uppercase text-8xl font-display display">
									Riders. Assemble!
								</h2>
							</div>
							<div className="flex flex-col gap-24">
								{EVENTS.map((event) => (
									<div
										key={event.key}
										className="flex flex-col gap-8 md:gap-16 md:flex-row"
									>
										<div className="flex-grow-0 bg-zinc-900 flex-shrink-0 w-full max-w-sm aspect-[1080/1350] relative">
											<Image
												src={event.image}
												alt="Hype picture for the event"
												fill
											/>
										</div>
										<div className="w-full gap-2 md:py-8 flex-shrink-1 flex-grow-1">
											<h5 className="text-2xl tracking-wide uppercase font-display text-zinc-400">
												{event.date.toLocaleDateString()}
											</h5>
											<h3 className="text-5xl font-extrabold uppercase font-display">
												{event.title}
											</h3>

											<div className="flex flex-col w-full gap-4 mt-4">
												<Link
													className="w-full"
													href=""
													onClick={() =>
														alert("This hasn't been implemented yet :D")
													}
												>
													<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
														<Calendar className="w-12 h-12" />

														<div className="flex flex-col">
															<p className="text-lg">
																Add event to your calendar
															</p>
														</div>
													</div>
												</Link>
												<Link
													className="w-full"
													href="https://ig.me/m/italianlongboardcollective"
													target="_blank"
												>
													<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
														<Chat className="w-12 h-12" />

														<div className="flex flex-col">
															<p className="text-lg">Ask for further details</p>
														</div>
													</div>
												</Link>
												<Link
													className="w-full"
													href="https://goo.gl/maps/dcSonfgsUjtNXBTE9"
													target="_blank"
												>
													<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
														<Path className="w-12 h-12" />

														<div className="flex flex-col">
															<p className="text-lg">
																Get directions to the spot
															</p>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				)}

				<section id="mission" className="px-6 mb-48">
					<div className="container flex flex-col max-w-6xl gap-5 mx-auto md:gap-12 md:flex-row">
						<h2 className="flex-shrink-0 w-full text-5xl font-extrabold uppercase md:max-w-xs font-display">
							putting the Italian longboarding scene under the spotlight
						</h2>

						<div className="text-lg">
							<p className="mb-3">
								The Italian longboard collective is a self-funded and
								independent project started by a group of italian riders with
								the aim of amplifying the voices of some of Italy's best riders
								and most promising talents, showcasing their skills on a global
								scale in order to fuel a more vibrant local scene.
							</p>
							<p className="mb-3">
								The homeland of pizza has some surprisingly talented riders that
								for a reason or another always end up falling behind when it
								comes to global recognition as well as a widely fragmented
								landscape of local groups and factions that have a hard time
								coordinating joint ventures and events.
							</p>
							<p className="mb-3">We're here to change that.</p>
						</div>
					</div>
				</section>

				<section id="riders" className="px-6 mb-48 overflow-hidden">
					<div className="container flex flex-col max-w-6xl gap-5 mx-auto md:gap-12 md:flex-row flex-nowrap">
						<h2 className="flex-shrink-0 w-full text-5xl font-extrabold uppercase md:max-w-xs font-display">
							Meet our wonderfully talented riders
						</h2>

						<div className="flex flex-col flex-grow flex-shrink w-full text-lg basis-0">
							<p className="mb-3">
								ILC was born out of the strong desire of a group of riders
								looking to inspire and fuel more people to come out of obscurity
								to have more sessions together and spread the love of
								longboarding with even more people. These are a few of them.
							</p>

							<div className="relative flex gap-8 mt-4 flex-nowrap h-[480px]">
								<div className="absolute -left-6 md:-left-16 w-[calc(100vw+48px)] md:w-[calc(((100vw-1152px)/2)+848px)]">
									<Swiper
										navigation={{
											nextEl: navigationNextRef.current,
											prevEl: navigationPrevRef.current,
										}}
										onBeforeInit={(swiper) => {
											if (
												!swiper.params.navigation ||
												typeof swiper.params.navigation === "boolean"
											)
												return;
											swiper.params.navigation.prevEl =
												navigationPrevRef.current;
											swiper.params.navigation.nextEl =
												navigationNextRef.current;
										}}
										onRealIndexChange={(swiper) =>
											setCurrentSlide(swiper.realIndex)
										}
										modules={[Navigation]}
										spaceBetween={0}
										slidesPerView="auto"
										className="relative"
									>
										<motion.div
											animate={{
												scale: currentSlide === 0 ? 0 : 1,
											}}
											className="box-content absolute z-20 hidden w-8 h-8 p-2 -translate-y-1/2 border rounded-full cursor-pointer top-1/2 bg-zinc-900 border-zinc-800 md:block"
											ref={navigationPrevRef}
											onClick={(e) => e.preventDefault()}
										>
											<CaretLeft className="w-8 h-8" />
										</motion.div>
										<div
											className="box-content absolute z-20 hidden w-8 h-8 p-2 -translate-y-1/2 border rounded-full cursor-pointer right-6 top-1/2 bg-zinc-900 border-zinc-800 md:block"
											ref={navigationNextRef}
											onClick={(e) => e.preventDefault()}
										>
											<CaretRight className="w-8 h-8" />
										</div>
										<div className="absolute top-0 left-0 z-10 hidden w-16 h-full bg-gradient-to-r from-black to-black/0 md:block" />
										{RIDERS.map((rider) => (
											<SwiperSlide
												key={rider.handle}
												className="!w-auto md:pl-16 pl-6"
											>
												<motion.div>
													<RiderCard
														image={rider.image}
														name={rider.name}
														city={rider.city}
													/>
												</motion.div>
											</SwiperSlide>
										))}
										<SwiperSlide className="!w-auto md:pl-16 pl-6">
											<RiderCardMore />
										</SwiperSlide>
										<SwiperSlide className="!w-auto">
											<div className="w-[calc(((100vw-1152px)/2)-40px)]" />
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="spots" className="px-6 mb-48">
					<div className="container flex flex-col max-w-6xl gap-5 mx-auto md:gap-12 md:flex-row flex-nowrap">
						<h2 className="flex-shrink-0 w-full text-5xl font-extrabold uppercase md:max-w-xs font-display">
							Discover Italy through a brand new lens
						</h2>

						<div className="flex flex-col flex-grow flex-shrink w-full text-lg basis-0">
							<p className="mb-3">
								Something you notice when you start skating is that places that
								you've known for your entire life take on completely new lives.
								You start judging pavements by their smoothness, you start
								looking at curbs and little pebbles with wide eyes for widely
								different reasons and you swear vengeance against romans for
								making such durable yet unskatable roads all of those years ago.
							</p>
							<p className="mb-3">
								It also completely changes the way you travel, always looking
								for new spots to skate and trying to reinvent the destinations
								of your journeys to host some of the most aesthetic sessions
								you've ever went through.
							</p>
							<p className="mb-3">
								This is a collection compiled by our riders of some of our
								favourite or most underrated places to take your board and have
								some fun.
							</p>

							<div className="relative mt-8">
								<div className="w-full rounded-lg h-[512px] bg-mapPlaceholder items-center flex bg-cover justify-center after:bg-zinc-900 after:absolute after:w-full after:h-full after:mix-blend-exclusion after:rounded-lg after:border after:border-zinc-800">
									<p className="text-2xl font-bold">Coming soon</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</main>
		</>
	);
}
