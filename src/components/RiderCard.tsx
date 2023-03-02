import Image from "next/image";
import React from "react";

export const RiderCard = () => {
	return (
		<div className="flex flex-col gap-3 p-2 border border-solid rounded-lg w-80 bg-zinc-900 border-zinc-800">
			<Image
				src="/riders/lgbdsebs.jpg"
				alt="Sebastian Francesconi"
				style={{
					objectFit: "cover",
					aspectRatio: 1080 / 1350,
					display: "block",
				}}
				width={540}
				height={675}
				className="rounded bg-zinc-800"
			/>
			<div className="flex flex-col gap-0 px-2">
				<h5 className="text-4xl leading-none uppercase font-display">
					Rider name
				</h5>
				<p className="text-zinc-400">Padova</p>
			</div>
		</div>
	);
};
