import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const HomeContainer = dynamic(() => import('../src/features/HomeContainer'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>
      <HomeContainer />
    </>
  )
}

export default Home
