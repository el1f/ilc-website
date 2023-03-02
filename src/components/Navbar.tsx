import Link from "next/link";
import Image from "next/image";
import React from "react";
import { InstagramLogo } from "phosphor-react";

export const Navbar = () => {
	return (
		<header className="fixed z-10 w-full py-8">
			<nav className="container z-50 flex content-center justify-between w-full h-20 max-w-4xl p-6 mx-auto font-medium border rounded-full shadow-xl bg-zinc-900 border-zinc-800 top-16">
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
	);
};
