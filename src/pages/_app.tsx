import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

import "../styles/globals.css";

const thunder = localFont({
	src: "../fonts/thunder/thunder-vf.ttf",
	variable: "--font-thunder",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${thunder.variable} ${spaceGrotesk.variable} font-sans`}>
			<Component {...pageProps} />
		</div>
	);
}
