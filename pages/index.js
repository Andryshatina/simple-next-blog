import Link from 'next/link';
import { getPosts } from '../lib/posts';

export async function getStaticProps() {
	const posts = await getPosts();
	return {
		props: {
			posts
		},
	};
}

const HomePage = ({ posts }) => {
	return (
		<main>
			<h1>Simple blog</h1>
			<ul>
				{posts.map(({ slug, title }) => (
					<li key={slug}>
						<Link href={`/posts/${slug}`}>{title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}

export default HomePage;
