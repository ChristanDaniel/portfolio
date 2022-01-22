import React from 'react'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Head from 'next/head'

const Header = dynamic(() => import('../src/components/Header'), {
  ssr: false
})

const HomeContainer = dynamic(() => import('../src/features/HomeContainer'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portifolio</title>
      </Head>
      <Header />
      <HomeContainer />
    </>
  )
}

export default Home
