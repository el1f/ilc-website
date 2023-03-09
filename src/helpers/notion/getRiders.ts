import { Client, isFullPage } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { Discipline } from "@/types/data";

export async function getRiders() {
	const CONTACTS_DATABASE_ID = "ab2afe8910bb4e76a8e8847fdd40a3e8";

	const notion = new Client({
		auth: process.env.NOTION_INTEGRATION_TOKEN,
	});

	const contactsRes = await notion.databases.query({
		database_id: CONTACTS_DATABASE_ID,
		filter: {
			and: [
				{
					property: "Category",
					select: {
						equals: "Rider",
					},
				},
				{
					checkbox: {
						equals: true,
					},
					property: "Active",
				},
				{
					checkbox: {
						equals: true,
					},
					property: "Verified",
				},
				{
					checkbox: {
						equals: true,
					},
					property: "Public",
				},
			],
		},
		sorts: [
			{
				direction: "ascending",
				property: "Last name",
			},
		],
	});

	const riders = (
		contactsRes.results.filter((riderPage) =>
			isFullPage(riderPage),
		) as PageObjectResponse[]
	).map((riderPage) => {
		// if (!isFullPage(riderPage)) return;
		const pageProps = riderPage.properties;
		const city =
			pageProps["AoC"].type === "rich_text"
				? pageProps["AoC"].rich_text[0]?.plain_text ?? null
				: "";
		const handle =
			pageProps["Handle"].type === "rich_text"
				? pageProps["Handle"].rich_text[0]?.plain_text ?? null
				: "";
		const disciplines =
			pageProps["Styles"].type === "multi_select"
				? pageProps["Styles"].multi_select?.map(
						(style) => style.name as Discipline,
				  )
				: [];
		const image =
			pageProps["Photo"].type === "files" &&
			pageProps["Photo"].files[0]?.type === "file"
				? pageProps["Photo"].files[0]?.file.url
				: "";
		const links =
			pageProps["IG"].type === "url"
				? { INSTAGRAM: pageProps["IG"].url ?? "", WEBSITE: "" }
				: { INSTAGRAM: "", WEBSITE: "" };
		const name =
			pageProps["Name"].type === "title" &&
			pageProps["Last name"].type === "rich_text"
				? `${pageProps["Last name"].rich_text[0]?.plain_text} ${pageProps["Name"].title[0]?.plain_text}`
				: "";

		return {
			city,
			disciplines,
			handle,
			id: riderPage.id,
			image,
			links,
			name,
		};
	});

	return riders;
}
