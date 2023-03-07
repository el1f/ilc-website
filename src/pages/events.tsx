import dayjs from "dayjs";
import Link from "next/link";
import { event } from "nextjs-google-analytics";
import React from "react";

import { EventCard } from "@/components/EventCard";
import EVENTS from "@/data/events";

const UPCOMING_EVENTS = EVENTS.filter((event) => {
	return dayjs(event.date).isAfter(dayjs());
});
const PAST_EVENTS = EVENTS.filter((event) => {
	return dayjs(event.date).isBefore(dayjs());
});

const Events = () => {
	return (
		<main>
			<section className="px-6 pt-40 md:pt-64 md:px-0">
				<header className="container max-w-4xl mx-auto mb-32">
					<div className="flex justify-between">
						<h1 className="mb-4 text-6xl font-bold uppercase font-display">
							Events
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
										label: "Add event",
									});
								}}
							>
								I have an event!
							</button>
						</Link>
					</div>
					<p className="text-lg">
						Looking for some fun and excitement on your longboard? Join us for
						our upcoming meetups and events! Whether you're looking for a casual
						cruise or an adrenaline-fueled session, we've got something for
						everyone. Come hang with us and ride the streets together.
						<br />
						See you soon!
					</p>
				</header>
			</section>

			<section className="px-6 mb-24 md:px-0">
				<div className="container max-w-4xl mx-auto">
					<h2 className="mb-4 text-4xl font-bold tracking-wide uppercase font-display">
						Upcoming events
					</h2>

					<div className="flex flex-col gap-6">
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

						{UPCOMING_EVENTS.length === 0 && (
							<div className="p-8 text-center border rounded-lg border-zinc-600">
								<div className="max-w-md mx-auto">
									<h3 className="mb-2 text-3xl font-bold tracking-wide uppercase font-display">
										Nothing planned... for now.
									</h3>
									<p className="text-zinc-400">
										Thanks for stopping by! We're busy planning some exciting
										new events for our community. Check back soon to stay up to
										date and join the ride. We can't wait to share what we have
										in store with you!
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

			<section className="px-6 mb-24 md:px-0">
				<div className="container max-w-4xl mx-auto">
					<h2 className="mb-4 text-4xl font-bold tracking-wide uppercase font-display">
						Past events
					</h2>

					<div className="container grid max-w-5xl grid-cols-1 gap-4 mx-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3">
						{PAST_EVENTS.map((event) => (
							<Link className="block w-full" href={`/events/${event.slug}`}>
								<EventCard
									key={event.title}
									image={event.image}
									title={event.title}
									date={event.date}
									location={event.location}
									address={event.address}
									coordinates={event.coordinates}
									isPast
								/>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Events;
