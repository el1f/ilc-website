import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { EventCard } from "@/components/EventCard";
import { RiderCard } from "@/components/RiderCard";
import { RiderCardMore } from "@/components/RiderCardMore";
import EVENTS from "@/data/events";
import RIDERS from "@/data/riders";

const UPCOMING_EVENTS = EVENTS.filter((event) => {
	return dayjs(event.date).isAfter(dayjs());
});

export default function Home() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<>
			<main>
				<section className="py-64">
					<div className="container max-w-4xl mx-auto">
						<h2 className="font-display uppercase font-extrabold text-[75.3vw] leading-[0.75] min-[896px]:text-[676px] opacity-0 absolute">
							Ciao
						</h2>
						<h1 className="font-display uppercase font-extrabold flex flex-col text-[20.5vw] text-justify leading-[0.75] min-[896px]:text-[204.3px] opacity-0 absolute">
							introducing italy's finest longboarders
						</h1>
						<div className="relative w-full aspect-[320/176] mb-16">
							<Image src="/assets/ciao.svg" alt="Ciao" fill />
						</div>
						<div className="relative w-full aspect-[320/164]">
							<Image src="/assets/heading.svg" alt="Abstract" fill />
						</div>
					</div>
				</section>

				{UPCOMING_EVENTS.length > 0 && (
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
								{UPCOMING_EVENTS.map((event) => (
									<EventCard
										key={event.title}
										image={event.image}
										title={event.title}
										date={event.date}
										location={event.location}
										address={event.address}
										coordinates={event.coordinates}
									/>
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
			</main>
		</>
	);
}
