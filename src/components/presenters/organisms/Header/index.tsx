import Link from 'next/link';
import github from '@/assets/icons/icon_github-mark.svg';
import x from '@/assets/icons/icon_x.svg';
import Image from 'next/image';
import { BLOG_NAME } from '@/constants';

export const Header = () => {
	return (
		<header className="bg-white shadow-sm px-2">
			<nav className="mx-auto px-4 py-4 flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600"
				>
					{BLOG_NAME}
				</Link>
				<ul className="flex space-x-4 items-center">
					<li>
						<a
							href="https://github.com/harutas"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<Image src={github.src} width={28} height={28} alt="Githubのアイコン" />
						</a>
					</li>
					<li>
						<a href="https://x.com/harutas_y" target="_blank" rel="noopener noreferrer" aria-label="X">
							<Image src={x.src} width={25} height={25} alt="Xのアイコン" />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
