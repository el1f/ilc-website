import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Chat, InstagramLogo, Path } from "phosphor-react";

export default function Home() {
	return (
		<>
			<Head>
				<title>ILC</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header className="fixed w-full py-8">
					<nav className="container flex content-center justify-between w-full h-20 max-w-4xl p-6 mx-auto font-medium border rounded-full shadow-xl bg-zinc-900 border-zinc-800 top-16">
						<Image src="/brand/logo.svg" alt="logo" height={40} width={40} />

						<div className="flex items-center gap-4">
							<div className="flex gap-2">
								<Link
									className="p-2 leading-none rounded-lg hover:bg-zinc-800"
									href="/events"
								>
									Meetups
								</Link>
								<Link
									className="p-2 leading-none rounded-lg hover:bg-zinc-800"
									href="/spots"
								>
									Spots
								</Link>
								<Link
									className="p-2 leading-none rounded-lg hover:bg-zinc-800"
									href="/riders"
								>
									Riders
								</Link>
							</div>
							<span>•</span>
							<div className="flex gap-4">
								<Link
									className="p-2 leading-none rounded-full hover:bg-zinc-800"
									href="https://google.com"
								>
									<InstagramLogo className="w-6 h-6" />
								</Link>
							</div>
						</div>
					</nav>
				</header>

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

				<section id="next-events" className="mb-48">
					<div className="container max-w-4xl mx-auto">
						<div className="mb-8 text-center">
							<h6 className="mb-2 text-lg font-medium uppercase display">
								MEETUP ALERT ENGAGED
							</h6>
							<h2 className="font-extrabold uppercase text-8xl font-display display">
								Riders. Assemble!
							</h2>
						</div>
						<div className="flex gap-16">
							<div className="flex-grow-0 bg-zinc-900 flex-shrink-1">
								<Image
									className="max-w-sm"
									src="/events/20230305.png"
									alt="Hype picture for the event"
									height={1350}
									width={1080}
								/>
							</div>
							<div className="w-full gap-2 py-8 flex-shrink-1 flex-grow-1">
								<h5 className="text-2xl tracking-wide uppercase font-display text-zinc-400">
									05 March 2023
								</h5>
								<h3 className="text-5xl font-extrabold uppercase font-display">
									Meetup Lucio Dalla
								</h3>

								<div className="flex flex-col w-full gap-4 mt-4">
									<Link className="w-full" href="">
										<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
											<Calendar className="w-12 h-12" />

											<div className="flex flex-col">
												<p className="text-lg">Add event to your calendar</p>
											</div>
										</div>
									</Link>
									<Link className="w-full" href="">
										<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
											<Chat className="w-12 h-12" />

											<div className="flex flex-col">
												<p className="text-lg">Ask for further details</p>
											</div>
										</div>
									</Link>
									<Link className="w-full" href="">
										<div className="flex items-center gap-4 p-4 border rounded-lg border-zinc-600">
											<Path className="w-12 h-12" />

											<div className="flex flex-col">
												<p className="text-lg">Get directions to the spot</p>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="mission" className="mb-48">
					<div className="container flex max-w-6xl gap-12 mx-auto">
						<h2 className="flex-shrink-0 w-full max-w-xs text-5xl font-extrabold uppercase font-display">
							putting the Italian longboarding scene under the spotlight
						</h2>

						<div className="text-lg">
							<p className="mb-3">
								The Italian longboard collective is a self-funded and
								independent project started by a group of italian riders with
								the aim of amplifying the voices of some of Italy's best riders
								and most promising talents, showcasing their skills on a global
								scale in order to fuel a more vibrant local scene. The homeland
							</p>
							<p className="mb-3">
								of pizza has some surprisingly talented riders that for a reason
								or another always end up falling behind when it comes to global
								recognition as well as a widely fragmented landscape of local
								groups and factions that have a hard time coordinating joint
								ventures and events.
							</p>
							<p className="mb-3">We're here to change that.</p>
						</div>
					</div>
				</section>

				<section id="riders" className="mb-48">
					<div className="container flex max-w-6xl gap-12 mx-auto">
						<h2 className="flex-shrink-0 w-full max-w-xs text-5xl font-extrabold uppercase font-display">
							Meet our wonderfully talented riders
						</h2>

						<div className="text-lg">
							<p className="mb-3">
								ILC was born out of the strong desire of a group of riders
								looking to inspire and fuel more people to come out of obscurity
								to have more sessions together and spread the love of
								longboarding with even more people. These are a few of them.
							</p>

							<div>
								<div className="flex gap-8 mt-12 flex-nowrap">
									<div className="p-2 w-80 h-[432px] bg-zinc-900 flex flex-col gap-3 rounded-lg border-zinc-800 border-solid border">
										<Image
											src=""
											alt=""
											width={304}
											height={336}
											className="rounded bg-zinc-800"
										/>
										<div className="flex flex-col gap-0 px-2">
											<h5 className="text-4xl leading-none uppercase font-display">
												Rider name
											</h5>
											<p className="text-zinc-400">Padova</p>
										</div>
									</div>
									<div className="p-2 w-80 h-[432px] bg-zinc-900 flex flex-col gap-3 rounded-lg border-zinc-800 border-solid border">
										<Image
											src=""
											alt=""
											width={304}
											height={336}
											className="rounded bg-zinc-800"
										/>
										<div className="flex flex-col gap-0 px-2">
											<h5 className="text-4xl leading-none uppercase font-display">
												Rider name
											</h5>
											<p className="text-zinc-400">Padova</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<footer className="px-6 pt-32 pb-12">
					<div className="container flex flex-col max-w-6xl gap-12 mx-auto">
						<div className="flex justify-between">
							<div className="flex flex-col max-w-xs gap-8">
								<Image
									src="/brand/logo.svg"
									alt="logo"
									height={80}
									width={80}
								/>
								<p>
									Fueling the Italian world domination a trick and a slice of
									pizza at a time.
								</p>
							</div>

							<div className="flex gap-12">
								<div className="flex flex-col gap-2">
									<h6 className="text-2xl font-bold tracking-wide font-display">
										About
									</h6>
									<Link href="/about">About ILC</Link>
									<Link href="/riders">Riders</Link>
									<Link href="/crews">Crews</Link>
									<Link href="/cities">Cities</Link>
								</div>
								<div className="flex flex-col gap-2">
									<h6 className="text-2xl font-bold tracking-wide font-display">
										Cool things
									</h6>
									<Link href="/events">Our events</Link>
									<Link href="/spots">Our spots</Link>
									<Link href="/media">Media room</Link>
									<Link href="/side">Side projects</Link>
								</div>
								<div className="flex flex-col gap-2">
									<h6 className="text-2xl font-bold tracking-wide font-display">
										Community
									</h6>
									<Link
										href="https://www.instagram.com/italianlongboardcollective"
										target="_blank"
									>
										Follow us on Instagram
									</Link>
								</div>
							</div>
						</div>

						<hr />

						<div className="flex justify-between">
							<p>©2022 Italian Longboard Collective. All rights reserved</p>
							<Link
								className="p-2 leading-none rounded-full hover:bg-zinc-800"
								href="https://google.com"
							>
								<InstagramLogo className="w-6 h-6" />
							</Link>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
