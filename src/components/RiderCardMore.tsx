import Image from "next/image";
import React from "react";

export const RiderCardMore = () => {
	return (
		<div className="flex flex-col gap-3 p-2 border border-solid rounded-lg w-80 bg-zinc-900 border-zinc-800">
			<Image
				src="/riders/placeholder.png"
				alt="Sebastian Francesconi"
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
				<h5 className="text-4xl leading-none uppercase font-display">You</h5>
				<p className="text-zinc-400">Italy</p>
			</div>
		</div>
	);
};
