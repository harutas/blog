import { PostListItem } from '@/components/presenters/molecules/PostListItem';
import { GetComponentProps } from '@/types';

export type Props = {
	posts: GetComponentProps<typeof PostListItem>[];
};

export const PostList = (props: Props) => {
	const { posts } = props;
	return (
		<div className="grid md:grid-cols-2 gap-6 ">
			{posts.map((post, index) => {
				return <PostListItem key={index} {...post} />;
			})}
		</div>
	);
};
