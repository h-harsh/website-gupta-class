import type { NextPage } from 'next'
import Head from 'next/head'
import { ContactUs } from '../../src/layout'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gupta Classes</title>
        <meta name="description" content="make your Future Bright" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactUs/>
    </div>
  )
}

export default Contact
