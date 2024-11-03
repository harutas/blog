import { Props } from '../../atoms/TagListItem';

export type Params = {
	tag: string;
};

export const toTagListItemProps = (params: Params): Props => {
	const { tag } = params;
	return {
		label: tag,
	};
};

export type ArrayParams = {
	tags: string[];
};

export const toTagListItemsProps = (params: ArrayParams): Props[] => {
	const { tags = [] } = params;
	return tags.map((tag) => {
		return toTagListItemProps({
			tag,
		});
	});
};
