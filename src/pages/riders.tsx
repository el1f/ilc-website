import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { event } from "nextjs-google-analytics";
import React from "react";

import { RiderCard } from "@/components/RiderCard";
import { getRiders } from "@/helpers/notion/getRiders";
import { Rider } from "@/types/data";

const Riders: NextPage<{
	riders: Rider[];
}> = ({ riders }) => {
	return (
		<>
			<Head>
				<title>ILC • Riders</title>
			</Head>
			<div className="px-6 py-40 md:py-64">
				<header className="container max-w-4xl mx-auto mb-16">
					<div className="flex justify-between">
						<h1 className="mb-4 text-6xl font-extrabold uppercase font-display">
							Riders
						</h1>

						<Link
							href="https://ig.me/m/italianlongboardcollective"
							target="_blank"
						>
							<button
								className="h-12 px-6 font-bold tracking-wide rounded bg-zinc-50 hover:bg-zinc-200 text-zinc-900"
								onClick={() => {
									event("lead", {
										category: "Contact",
										label: "Add rider",
									});
								}}
							>
								Add me
							</button>
						</Link>
					</div>
					<p className="mb-2">
						Introducing the riders of the Italian Longboard Collective! Each has
						their own unique style, skill level, interests and personality for
						you to discover!
					</p>
					<p>
						We're passionate about longboarding and always excited to meet new
						riders who share our love for the sport. So if you're a longboarder
						in Italy looking for a welcoming and supportive community, come join
						us! Let's shred together and showcase the awesomeness of the Italian
						longboarding scene!
					</p>
				</header>

				<main className="container grid max-w-5xl grid-cols-1 gap-8 mx-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3">
					{riders.map((rider) => (
						// <motion.div>
						<RiderCard
							image={rider.image}
							name={rider.name}
							city={rider.city}
						/>
						// </motion.div>
					))}
				</main>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps<{
	riders: Rider[];
}> = async () => {
	const riders = await getRiders();

	return {
		props: {
			riders,
		},
		revalidate: 8 * 60 * 60,
	};
};

export default Riders;
