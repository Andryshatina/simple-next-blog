import { getPostData, getPostSlugs } from '../../lib/posts';

export async function getStaticPaths() {
	return {
		paths: await getPostSlugs().then(slugs => slugs.map(slug => (
			{ params: { slug } }
		))),
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {

	const post = await getPostData(slug);

	return {
		props: {
			post
		},
	};
}

const PostPage = ({ post: { title, date, content } }) => {
	return (
		<main>
			<h1>{title}</h1>
			<p>{date}</p>
			<article dangerouslySetInnerHTML={{ __html: content }} />
		</main>
	);
}

export default PostPage;