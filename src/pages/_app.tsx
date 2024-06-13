import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Newsreader } from 'next/font/google';
import font from 'next/font/local';
import Head from 'next/head';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useFirstEverLoad, useVisitCounts } from '../hooks/use-first-ever-load';
import '../styles/globals.css';
import '../styles/blog.css';
import '../styles/toc.css';

const title = Newsreader({
	subsets: ['latin'],
	weight: ['400', '200'],
	style: 'italic',
	fallback: ['serif'],
});

const body = font({
	src: '../fonts/roobert-variable.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
	useFirstEverLoad();

	const [_, set] = useVisitCounts();

	useEffect(() => {
		set(x => x + 1);
	}, [set]);

	return (
		<>
			<style jsx global>
				{`
					:root {
						--font-title: ${title.style.fontFamily};
						--font-body: ${body.style.fontFamily};
					}
				`}
			</style>

			<Head>
				<title>zulfikar/</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
			
			<Toaster />
		</>
	);
}
