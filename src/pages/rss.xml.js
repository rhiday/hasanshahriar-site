import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
  const essays = await getCollection('essays', e => !e.data.draft);
  return rss({
    title: 'Hasan Shahriar',
    description: "Essays on building, shipping, and the outsider's edge.",
    site: context.site,
    items: essays.sort((a,b)=>b.data.pubDate-a.data.pubDate).map(e => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.pubDate,
      link: `/essays/${e.slug}/`,
    })),
  });
}
