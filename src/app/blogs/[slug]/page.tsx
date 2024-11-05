import { Emoji } from '@/components/presenters/atoms/Emoji';
import { PostContent } from '@/components/presenters/molecules/PostContent';
import { TagList } from '@/components/presenters/molecules/TagList';
import { toTagListItemsProps } from '@/components/presenters/molecules/TagList/TagListProps';
import { dayjs, formatSlashYMD } from '@/libs/date';
import { getAllPostSlugs, getPostBySlug } from '@/libs/posts';
import { WithContext, BlogPosting, BreadcrumbList } from 'schema-dts';
import { AUTHOR_NAME, BASE_URL, SITE_TITLE } from '@/config';
import { BASE_BLOG_PATH } from '@/constants/path';

export async function generateStaticParams() {
	const slugs = getAllPostSlugs();

	return slugs.map((slug) => {
		return { slug };
	});
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	const jsonLd: WithContext<BlogPosting | BreadcrumbList>[] = [
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': `${BASE_URL}${BASE_BLOG_PATH}/${slug}`,
			},
			headline: post.title,
			description: post.description,
			// image: [""] ページに直接属する記事の内容を表す画像のURL
			// "keywords": ["JavaScript", "SEO", "Programming"],
			// articleSection: "", 記事のジャンル
			author: {
				'@type': 'Person',
				name: AUTHOR_NAME,
			},
			publisher: {
				'@type': 'Organization',
				name: SITE_TITLE,
				// logo: {
				// 	'@type': 'ImageObject',
				// 	url: 'https://yourblogdomain.com/logo.png',
				// },
			},
			datePublished: dayjs(post.createdAt).toISOString(),
			dateModified: post.updatedAt ? dayjs(post.updatedAt).toISOString() : dayjs(post.createdAt).toISOString(),
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			name: 'パンくずリスト',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: SITE_TITLE,
					item: BASE_URL,
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: post.title,
					item: `${BASE_URL}${BASE_BLOG_PATH}/${slug}`,
				},
			],
		},
	];

	return (
		<>
			<div className="flex flex-col">
				<div className="flex flex-col items-center py-10 px-6">
					<Emoji emoji={post.emoji} size="md" />
					<h1 className="text-xl font-bold mt-5">{post.title}</h1>
					<p className="text-gray-500 text-sm mt-5">
						投稿日：
						{formatSlashYMD(new Date(post.createdAt))}
					</p>
				</div>
				<div className="flex flex-col bg-white rounded-md px-6 py-5">
					<TagList
						tags={toTagListItemsProps({
							tags: post.tags,
						})}
					/>

					<div className="mt-5">
						<PostContent mdxSource={post.content} />
					</div>
				</div>
			</div>
			{/* JSON-LD */}
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
		</>
	);
}
