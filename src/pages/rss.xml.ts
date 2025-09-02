import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {

	const posts = (await getCollection(
		'articles', ({ data }) => data.draft !== true))
		?.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).map((p) => (
			{
				title: p.data.title,
				description: p.data.description,
				pubDate: p.data.pubDate,
				link: `blog/${p.slug}`,
			}
		));

  console.log(posts)

	return rss({
		title: "Tonie's Blog",
		description: "Sharing my thoughts and experiences one byte at a time.",
		site: context.site,
		items: posts,
		customData: `<language>en-us</language>`,
	});
}
