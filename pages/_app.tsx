import type { AppProps } from 'next/app'
import Meta from '@/components/meta'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Meta />
			<Component {...pageProps} />
		</>
	)
}

export default App
