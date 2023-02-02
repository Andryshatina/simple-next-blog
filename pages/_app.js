import Head from 'next/head';
import NavBar from '../components/NavBar'

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Simple Blog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<NavBar />
			</header>
			<Component {...pageProps} />
		</>
	)
}

export default App;