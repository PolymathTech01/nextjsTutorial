import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Polymath | Home</title>
        <meta name='description' content='polymath' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1 className={styles.title}>Home page </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
          minima architecto ipsam quis vitae facere sit nam fugiat impedit,
          ullam debitis assumenda enim aut illum provident unde maxime cum
          optio.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
          minima architecto ipsam quis vitae facere sit nam fugiat impedit,
          ullam debitis assumenda enim aut illum provident unde maxime cum
          optio.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
          minima architecto ipsam quis vitae facere sit nam fugiat impedit,
          ullam debitis assumenda enim aut illum provident unde maxime cum
          optio.
        </p>
        <Link href={'/about'} className={styles.btn}>
          About
        </Link>
      </div>
    </>
  );
}
