import type { AppProps } from 'next/app'

import '../styles/globals.css'

import { TailwindScreenDebug } from '@cmp'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <TailwindScreenDebug />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
