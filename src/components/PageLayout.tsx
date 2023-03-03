import Head from "next/head";
import React from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const PageLayout: React.FC<{
	children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
	return (
		<>
			<Head>
				<title>ILC • Italian Longboard Collective</title>
				<meta
					name="description"
					content="We are a self-funded and independent project started by a group of italian riders with the aim of amplifying the voices of some of Italy's best riders and most promising talents, showcasing their skills on a global scale in order to fuel a more vibrant local scene."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/brand/logo.svg" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="ILC • Italian Longboard Collective"
				/>
				<meta
					property="og:url"
					content="https://italianlongboardcollective.com"
				/>
				<meta
					property="og:image"
					content="https://italianlongboardcollective.com/assets/ilc-og.jpg"
				/>
				<meta
					property="og:description"
					content="We are a self-funded and independent project started by a group of italian riders with the aim of amplifying the voices of some of Italy's best riders and most promising talents, showcasing their skills on a global scale in order to fuel a more vibrant local scene."
				></meta>
			</Head>

			<Navbar />

			{children}

			<Footer />
		</>
	);
};
