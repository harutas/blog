import { Footer } from '@/components/presenters/organisms/Footer';
import { Header } from '@/components/presenters/organisms/Header';
import { colors } from '@/components/system/colors';
import { SITE_TITLE } from '@/config';
import '@/styles/reset.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: SITE_TITLE,
	description: '日々の気づきや技術の備忘録',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ja"
			style={{
				minHeight: '100vh',
				backgroundColor: colors.background.base,
			}}
		>
			<body className={`flex flex-col`} style={{ minHeight: '100vh' }}>
				<Header />
				<main className="container grow mx-auto">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
