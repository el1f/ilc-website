import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "../styles/globals.css";
import { PageLayout } from "@/components/PageLayout";

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
		<>
			<GoogleAnalytics trackPageViews />
			<div className={`${thunder.variable} ${spaceGrotesk.variable} font-sans`}>
				<PageLayout>
					<Component {...pageProps} />
					<Analytics />
				</PageLayout>
			</div>
		</>
	);
}
