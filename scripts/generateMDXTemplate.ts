import { exec } from 'child_process';
import dayjs from 'dayjs';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

/**
 * 入力
 */
const prompt = (question: string): Promise<string> => {
	return new Promise((resolve) => rl.question(question, resolve));
};

/**
 * 再帰的に入力
 */
const promptRecursive = async (question: string, accumulator: string[] = []) => {
	const input = await prompt(question);

	if (input) {
		accumulator.push(input);
		console.log('\nCurrent entries:');
		accumulator.forEach((entry, index) => {
			console.log(`${index + 1}. ${entry}`);
		});

		return promptRecursive(question, accumulator);
	} else {
		return accumulator;
	}
};

/**
 * MDXの保存場所を取得
 */
const getPostDestination = () => {
	return path.join(process.cwd(), 'src', 'posts');
};

/**
 * YYYY-MM-DD
 */
const formatDashYMD = (date: Date): string => {
	return dayjs(date).format('YYYY-MM-DD');
};

/**
 * 入力値
 */
const entries = {
	slug: '',
	title: '',
	emoji: '',
	description: '',
	tags: [] as string[],
	createdAt: formatDashYMD(new Date()),
};

/**
 * テンプレートファイルを書き出す
 */
const writeFile = (): { filePath: string } => {
	const destination = getPostDestination();

	if (!existsSync(destination)) {
		mkdirSync(destination, { recursive: true });
	}

	const fileName = `_${entries.createdAt}-${entries.slug}.mdx`;
	const filePath = path.join(destination, fileName);

	const content = `---
title: "${entries.title}"
emoji: "${entries.emoji}"
description: "${entries.description}"
tags: [${entries.tags.map((tag) => `${tag}`).join(', ')}]
createdAt: "${entries.createdAt}"
---

## `;

	writeFileSync(filePath, content);

	console.log('\nGenerated MDX Template✨\n');

	return { filePath };
};

/**
 * 入力からテンプレートを生成してファイルを保存
 */
const generateMDXTemplate = async () => {
	try {
		entries.slug = await prompt('\nEnter slug: ');
		entries.title = await prompt('\nEnter title: ');
		entries.emoji = await prompt('\nEnter emoji: ');
		entries.description = await prompt('\nEnter description: ');
		entries.tags = await promptRecursive('\nEnter tag: ');
	} catch (error) {
		console.error('Error creating template:', error);
	} finally {
		rl.close();
	}

	return writeFile();
};

/**
 * VSCodeで開く
 */
const openInVSCode = (filePath: string) => {
	exec(`code ${filePath}`, (err, _, stderr) => {
		if (err) {
			console.error(`Error: ${stderr}`);
			return;
		}
		console.log(`VSCode opened the file: ${filePath.split('/').pop()}`);
	});
};

async function main() {
	const { filePath } = await generateMDXTemplate();
	openInVSCode(filePath);
}

main();
