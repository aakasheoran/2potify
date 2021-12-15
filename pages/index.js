import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Center from '../components/Center';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>2potify - A Spotify Clone</title>
      </Head>
      <main className='flex bg-black h-screen overflow-hidden'>
        <Sidebar />
        <Center />
      </main>
      <footer>
        {/* player */}
      </footer>
    </div>
  )
}

export async function getServerSideProps (context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  } 
}
