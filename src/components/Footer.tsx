import Link from "next/link";
import Image from "next/image";
import React from "react";
import { InstagramLogo } from "phosphor-react";

export const Footer = () => {
	return (
		<footer className="px-6 pt-32 pb-12">
			<div className="container flex flex-col max-w-6xl gap-12 mx-auto">
				<div className="flex justify-between">
					<div className="flex flex-col max-w-xs gap-8">
						<Image src="/brand/logo.svg" alt="logo" height={80} width={80} />
						<p>
							Fueling the Italian world domination a trick and a slice of pizza
							at a time.
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
						<InstagramLogo className="w-8 h-8" />
					</Link>
				</div>
			</div>
		</footer>
	);
};
