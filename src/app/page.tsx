import { PostList } from '@/components/presenters/organisms/PostList';
import { toPostListItemsProps } from '@/components/presenters/organisms/PostList/PostListProps';
import { getLatestPosts } from '@/libs/posts';

export default function Home() {
	const posts = getLatestPosts(10);
	return (
		<div className="flex flex-col items-center px-6">
			<h2 className="text-3xl font-bold text-center py-6">New Articles</h2>

			<div className="w-full">
				<PostList
					posts={toPostListItemsProps({
						posts,
					})}
				/>
			</div>
		</div>
	);
}
