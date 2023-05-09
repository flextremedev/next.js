import '@/styles/global.css'
import type { AppProps } from 'next/app'

/* istanbul ignore next */
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
