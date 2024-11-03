import { isValidElement, PropsWithChildren } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type Props = PropsWithChildren & {
	filename?: string;
};

export const CodeBlock = (props: Props) => {
	const { filename = '', children } = props;

	const isValidChildren = isValidElement(children);
	const code = isValidChildren && children.props ? children.props.children : String(children).replace(/\n$/, '');

	const className = isValidChildren ? children.props.className || '' : '';
	const match = /language-(\w+)/.exec(className);
	const language = match && match[1] ? match[1] : '';

	return (
		<div className="my-5 not-prose">
			{filename && (
				<div className="inline-flex text-sm bg-gray-700 text-gray-200 rounded-t px-3 py-1">{filename}</div>
			)}
			<SyntaxHighlighter
				language={language}
				style={dracula}
				codeTagProps={{ className: 'text-sm' }}
				customStyle={{
					borderRadius: filename ? '0 0.3em 0.3em 0.3em' : '0.3em',
					margin: '0',
				}}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};
