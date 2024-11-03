import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

export type Props = {
	href?: string;
	emoji: string;
	size?: 'sm' | 'md';
};

export const Emoji = (props: Props) => {
	const { href, emoji, size = 'md' } = props;

	const sizeClassName = size === 'md' ? 'w-24 h-24 md:w-28 md:h-28' : 'w-20 h-20 md:w-24 md:h-24';

	const fontsizeClassName = size === 'md' ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl';
	const content = <span className={fontsizeClassName}>{emoji}</span>;

	if (href) {
		return (
			<Link
				href={href}
				className={twJoin('flex justify-center items-center shrink-0 bg-white rounded-lg', sizeClassName)}
			>
				{content}
			</Link>
		);
	}
	return (
		<div className={twJoin('flex justify-center items-center shrink-0 bg-white rounded-lg', sizeClassName)}>
			{content}
		</div>
	);
};
