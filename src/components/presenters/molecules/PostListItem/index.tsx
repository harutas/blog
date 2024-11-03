import { Emoji } from '../../atoms/Emoji';

export type Props = {
	href: string;
	emoji: string;
	title: string;
	createdAt: string;
};

export const PostListItem = (props: Props) => {
	const { href, emoji, title, createdAt } = props;
	return (
		<div className="flex items-start space-x-4">
			<Emoji href={href} emoji={emoji} size="sm" />
			<div className="flex flex-col justify-center space-y-2 w-full">
				<a className="block" href={href}>
					<h2 className="text-base font-semibold text-gray-800">{title}</h2>
				</a>
				<div>
					<div className="flex items-center text-sm text-gray-500">
						<span>{createdAt}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
