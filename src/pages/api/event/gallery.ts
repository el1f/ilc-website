import { v2 as cloudinary } from "cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	pictures: string[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	try {
		cloudinary.config({
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET,
			cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
			secure: true,
		});

		const assets = await cloudinary.api
			.resources_by_tag("event/20230305bologna", {
				max_results: 300,
				tags: true,
			})
			.then((res) => {
				return res.resources.map((resource) => {
					const image = cloudinary.url(resource.public_id, {
						crop: "thumb",
						height: 180 * 2,
						width: 240 * 2,
					});

					return image;
				});
			});

		res.status(200).json({ pictures: assets.map((asset) => asset) });
	} catch (error) {
		console.log("CLOUDINARY ERROR");
		console.log(error);
	}
}
