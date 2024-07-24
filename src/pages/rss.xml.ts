import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const blog = (
    await getCollection("articles", ({ data }) => data.draft !== true)
  )?.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });

  const posts = blog.map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
		link: `/posts/${post.slug}`,
  }));

  return rss({
    title: "Tonie's Blog",
    description: "My corner of the internet.",
    site: context.site,
    items: posts,
  });
}
