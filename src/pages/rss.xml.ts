import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context: any) {
	let posts = (await getCollection("blog", ({ data }) => data.draft !== true))
		?.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).map((p) => (
			{
				title: p.data.title,
				description: p.data.description,
				pubDate: p.data.pubDate,
				link: `blog/${p.id}`,
			}
		))

	return rss({
		title: "Tonie's Blog",
		description: "Sharing my thoughts and experiences one byte at a time.",
		site: context.site,
		items: posts,
		customData: `<language>en-us</language>`,
	});
}
