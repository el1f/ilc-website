import clsx from "clsx";
import React from "react";

import { ImageWithFallback } from "./ImageWithFallback";

interface RiderCardProps {
	image?: string;
	name: string;
	city: string;
	dynamic?: boolean;
}

export const RiderCard: React.FC<RiderCardProps> = ({
	image,
	name,
	city,
	dynamic = false,
}) => {
	return (
		<div
			className={clsx(
				`flex flex-col gap-3 p-2 border border-solid rounded-lg bg-zinc-900 border-zinc-800`,
				{
					"aspect-[1080/1350]": dynamic,
					"w-80": !dynamic,
				},
			)}
		>
			<ImageWithFallback
				src={image ?? "/riders/placeholder.png"}
				alt={`Picture of ${name}`}
				style={{
					aspectRatio: 1080 / 1350,
					display: "block",
					objectFit: "cover",
				}}
				width={540}
				height={675}
				className="rounded bg-zinc-800"
			/>
			<div className="flex flex-col gap-0 px-2">
				<h5
					className={clsx(`text-4xl leading-none uppercase font-display`, {
						"text-xl": dynamic,
					})}
				>
					{name}
				</h5>
				<p className="text-zinc-400">{city}</p>
			</div>
		</div>
	);
};
