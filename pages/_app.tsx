import React from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import { GlobalStyle } from '../styles/globals'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Header = dynamic(() => import('../src/components/Header'), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
