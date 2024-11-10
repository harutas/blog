import { Post } from '@/types/post';
import { Props } from '../../molecules/PostListItem';
import { BASE_BLOG_PATH } from '@/constants/path';
import { formatSlashYMD } from '@/libs/date';

export type Params = {
	post: Post;
};

export const toPostListItemProps = (params: Params): Props => {
	const { post } = params;
	return {
		href: `${BASE_BLOG_PATH}/${post.slug}`,
		emoji: post.emoji,
		title: post.title,
		createdAt: formatSlashYMD(new Date(post.createdAt)),
	};
};

export type ArrayParams = {
	posts: Post[];
};

export const toPostListItemsProps = (params: ArrayParams): Props[] => {
	const { posts = [] } = params;
	return posts.map((post) => {
		return toPostListItemProps({
			post,
		});
	});
};
