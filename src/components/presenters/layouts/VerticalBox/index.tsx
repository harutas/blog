import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type Props = { className?: string; s?: number } & PropsWithChildren;

export const VerticalBox = (props: Props) => {
	const { className = '', s = 0, children } = props;
	return <div className={twMerge('flex flex-col items-center', `space-y-${s}`, className)}>{children}</div>;
};
