import { BASE_URL } from '@/config';
import { BASE_BLOG_PATH } from '@/constants/path';
import { dayjs, now } from '@/libs/date';
import { getAllPosts, getLatestPosts } from '@/libs/posts';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	// Googleはpriorityとchangefreqは見ないらしい
	const latestPost = getLatestPosts(1)[0];
	const staticPaths: MetadataRoute.Sitemap = [
		{
			url: BASE_URL,
			lastModified: latestPost
				? dayjs(latestPost.updatedAt || latestPost.createdAt).toISOString()
				: now().toISOString(),
		},
	];

	const allPosts = getAllPosts();
	const dynamicPaths: MetadataRoute.Sitemap = allPosts.map((post) => {
		return {
			url: `${BASE_URL}${BASE_BLOG_PATH}/${post.slug}`,
			lastModified: dayjs(post.updatedAt || post.createdAt).toISOString(),
		};
	});

	return [...staticPaths, ...dynamicPaths];
}
