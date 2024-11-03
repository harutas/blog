import { compileMDX } from 'next-mdx-remote/rsc';
import { CodeBlock } from '../CodeBlock';
import { PropsWithChildren } from 'react';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';

export type Props = {
	mdxSource: string;
};

const components = {
	pre: (props: JSX.IntrinsicAttributes & PropsWithChildren) => <CodeBlock {...props} />,
};

export const PostContent = async (props: Props) => {
	const { mdxSource } = props;
	const { content } = await compileMDX({
		source: mdxSource,
		options: {
			mdxOptions: { rehypePlugins: [rehypeMdxCodeProps] },
		},
		components,
	});
	return (
		// ダークモード対応時:dark:prose-invert
		<article className="prose w-full max-w-none">{content}</article>
	);
};
