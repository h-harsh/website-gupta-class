import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage } from '../src/layout'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gupta Professional Classes</title>
        <meta name="description" content="make your Future Bright" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </div>
  )
}

export default Home
