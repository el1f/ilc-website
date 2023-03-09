import clsx from "clsx";
import { motion, transform } from "framer-motion";
import React from "react";

import { useElementSize } from "@/helpers/useElementSize";
import { useMergedRef } from "@/helpers/useMergedRef";
import { useMouse } from "@/helpers/useMove";

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
	const { ref: moveRef, x, y } = useMouse();
	const { ref: sizeRef, width, height } = useElementSize();
	const ref = useMergedRef(moveRef, sizeRef);
	const rotateY = transform(x, [0, width / 2, width], [-10, 0, 10]);
	const rotateX = transform(y, [0, height / 2, height], [10, 0, -10]);

	return (
		<motion.div
			ref={ref}
			style={{
				transformPerspective: 5000,
			}}
			whileHover={{
				rotateX,
				rotateY,
				scale: 1.05,
			}}
			className={clsx(
				`flex flex-col gap-3 p-2 border border-solid rounded-lg bg-zinc-900 border-zinc-800`,
				{
					"aspect-[1080/1350]": dynamic,
					"w-80": !dynamic,
				},
			)}
		>
			<div className="overflow-hidden rounded shadow-inner bg-zinc-800">
				<motion.figure
					whileHover={{
						scale: 1.1,
						x: rotateX,
						y: rotateY,
					}}
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
					/>
				</motion.figure>
			</div>
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
		</motion.div>
	);
};
