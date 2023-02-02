import { readdir, readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function getPostData(slug) {
	const source = await readFile(`content/posts/${slug}.md`, 'utf8');
	const { data: { date, title }, content } = matter(source);
	const html = marked(content);
	return {
		title,
		date,
		content: html
	};
}

export async function getPostSlugs() {
	const files = await readdir('content/posts');
	return files.map(file => file.replace(/\.md$/, ''));
}

// async function that returns an array of all posts titles and slugs

export async function getPosts() {
	const slugs = await getPostSlugs();
	const posts = await Promise.all(
		slugs.map(async slug => {
			const { title } = await getPostData(slug);
			return {
				title,
				slug
			};
		})
	);
	return posts;
}