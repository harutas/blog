import { GetComponentProps } from '@/types';
import { TagListItem } from '../../atoms/TagListItem';

export type Props = {
	tags: GetComponentProps<typeof TagListItem>[];
};

export const TagList = (props: Props) => {
	const { tags } = props;
	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag, index) => {
				return <TagListItem key={index} {...tag} />;
			})}
		</div>
	);
};
