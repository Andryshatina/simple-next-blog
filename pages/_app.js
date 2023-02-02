import Head from 'next/head';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Simple Blog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico?v=1" />
			</Head>
			<header>
				<NavBar />
			</header>
			<Component {...pageProps} />
		</>
	)
}

export default App;