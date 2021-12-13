import Head from 'next/head'
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>2potify - A Spotify Clone</title>
      </Head>
      <main className='bg-black h-screen overflow-hidden'>
        <Sidebar />
        {/* center */}
      </main>
      <footer>
        {/* player */}
      </footer>
    </div>
  )
}
