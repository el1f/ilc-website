import Image from "next/image";
import Link from "next/link";
import { InstagramLogo } from "phosphor-react";
import React from "react";

export const Footer = () => {
	return (
		<footer className="px-6 pt-32 pb-12">
			<div className="container flex flex-col max-w-6xl gap-6 mx-auto md:gap-12">
				<div className="flex flex-col justify-between gap-12 md:flex-row">
					<div className="flex flex-col max-w-xs gap-8">
						<Image src="/brand/logo.svg" alt="logo" height={80} width={80} />
						<p>
							Fueling the Italian world domination a trick and a slice of pizza
							at a time.
						</p>
					</div>

					<div className="grid flex-col grid-cols-2 gap-6 md:gap-12 md:flex md:flex-row">
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
							<Link
								href="mailto:info@italianlongboardcollective.com"
								target="_blank"
							>
								Contact us
							</Link>
						</div>
					</div>
				</div>

				<hr />

				<div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
					<p>©2022 Italian Longboard Collective. All rights reserved</p>
					<Link
						className="p-2 leading-none rounded-full hover:bg-zinc-800"
						href="https://www.instagram.com/italianlongboardcollective/"
						target="_blank"
					>
						<InstagramLogo className="w-8 h-8" />
					</Link>
				</div>
			</div>
		</footer>
	);
};
