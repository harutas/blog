import { Tag } from 'react-feather';

export type Props = {
	label: string;
};

export const TagListItem = (props: Props) => {
	const { label } = props;
	return (
		<div className="flex items-center px-2 py-1 rounded-full border border-solid border-gray-200">
			<span className="mt-0.5 mr-1">
				<Tag size={14} />
			</span>
			<span className="text-xs font-light text-nowrap">{label}</span>
		</div>
	);
};
