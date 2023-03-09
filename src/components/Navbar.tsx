import Image from "next/image";
import Link from "next/link";
import { InstagramLogo } from "phosphor-react";
import React from "react";

export const Navbar = () => {
	return (
		<header className="fixed z-10 w-full p-4 md:py-8">
			<nav className="container z-50 flex items-center content-center justify-between w-full h-20 max-w-4xl px-6 mx-auto font-medium border rounded-full shadow-xl bg-zinc-900 border-zinc-800 md:top-16">
				<Link className="block w-10 h-10" href="/">
					<Image
						src="/brand/logo.svg"
						alt="logo"
						height={40}
						width={40}
						priority
					/>
				</Link>

				<div className="flex items-center gap-4">
					<div className="gap-2">
						<Link
							className="p-2 leading-none rounded-lg hover:bg-zinc-800"
							href="/events"
						>
							Meetups
						</Link>
						<Link
							className="hidden p-2 leading-none rounded-lg md:inline hover:bg-zinc-800"
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
							href="https://www.instagram.com/italianlongboardcollective/"
							target="_blank"
						>
							<InstagramLogo className="w-6 h-6" />
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};
