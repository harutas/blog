export interface Post {
	slug: string;
	title: string;
	emoji: string;
	tags: string[];
	description: string;
	content: string; // MDXコンテンツ
	createdAt: string; // YYYY-MM-DD形式の文字列
	updatedAt?: string; // YYYY-MM-DD形式の文字列
}
