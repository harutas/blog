import { BLOG_NAME } from '@/constants';
import { formatY } from '@/libs/date';

export const Footer = () => {
	return (
		<footer className="w-full bg-white mt-auto">
			<div className="container mx-auto px-4 py-6 flex justify-center items-center">
				<p className="text-gray-600 text-sm">
					&copy; {formatY(new Date())} {BLOG_NAME}
				</p>
			</div>
		</footer>
	);
};
