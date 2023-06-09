import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
	return <Component {...pageProps} />
}

export default MyApp
