import { Post } from '@/types/post';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getAllPostSlugs() {
	return readdirSync(postsDirectory).map((fileName) => formatToSlug(fileName));
}

export const getAllPosts = (): Post[] => {
	const files = readdirSync(postsDirectory);
	return files.map((fileName) => {
		const slug = formatToSlug(fileName);
		const filePath = path.join(postsDirectory, fileName);
		const fileContent = readFileSync(filePath, 'utf-8');
		const { data, content } = matter(fileContent);

		return {
			slug,
			title: data.title,
			emoji: data.emoji,
			description: data.description,
			tags: data.tags,
			content,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
		};
	});
};

export const getLatestPosts = (limit = 10): Post[] => {
	const files = readdirSync(postsDirectory);
	const posts: Post[] = files.map((fileName) => {
		const slug = formatToSlug(fileName);
		const filePath = path.join(postsDirectory, fileName);
		const fileContent = readFileSync(filePath, 'utf-8');
		const { data, content } = matter(fileContent);

		return {
			slug,
			title: data.title,
			emoji: data.emoji,
			description: data.description,
			tags: data.tags,
			content,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
		};
	});

	return sortByUpdatedAtDesc(posts).slice(0, limit);
};

export const getPostBySlug = (slug: string): Post => {
	const fileName = `${slug}.mdx`;
	const filePath = path.join(postsDirectory, fileName);
	const fileContent = readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	return {
		slug,
		title: data.title,
		emoji: data.emoji,
		tags: data.tags,
		description: data.description,
		content,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
	};
};

export const formatToSlug = (fileName: string) => {
	return fileName.replace(/\.mdx$/, '');
};

export const sortByUpdatedAtDesc = (posts: Post[]) => {
	return posts.sort((a, b) => {
		const dateA = a.updatedAt || a.createdAt;
		const dateB = b.updatedAt || b.createdAt;
		return new Date(dateB).getTime() - new Date(dateA).getTime();
	});
};
