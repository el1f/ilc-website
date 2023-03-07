import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

export interface ImageWithFallbackProps extends ImageProps {
	fallbackSrc?: string;
	alt: string;
	src: string;
}

const FALLBACK_IMAGE = "/riders/placeholder.png";

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
	fallbackSrc = FALLBACK_IMAGE,
	alt,
	src,
	...props
}) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		setError(false);
	}, [src]);

	return (
		<Image
			alt={alt}
			onError={() => setError(true)}
			src={error ? fallbackSrc : src}
			{...props}
		/>
	);
};
