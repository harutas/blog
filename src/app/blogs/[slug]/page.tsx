import { Emoji } from '@/components/presenters/atoms/Emoji';
import { PostContent } from '@/components/presenters/molecules/PostContent';
import { TagList } from '@/components/presenters/molecules/TagList';
import { toTagListItemsProps } from '@/components/presenters/molecules/TagList/TagListProps';
import { formatSlashYMD } from '@/libs/dateFormat';
import { getAllPostSlugs, getPostBySlug } from '@/libs/posts';

export async function generateStaticParams() {
	const slugs = getAllPostSlugs();

	return slugs.map((slug) => {
		return { slug };
	});
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	return (
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
	);
}
