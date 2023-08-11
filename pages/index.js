import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjia List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>compiled client and server successfully in 86 ms (211 modules)</p>
        <p className={styles.text}>compiled client and server successfully in 86 ms (211 modules)</p>
        <Link href='/ninjas'>
          <p className={styles.btn}>See Ninja Listing</p>
        </Link>
      </div>
    </>
  )
}
