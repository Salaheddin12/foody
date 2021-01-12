import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Search from '../components/Search'
import {useState} from 'react'

export default function Home() {
  const [Recipes, setRecipes] = useState([]);

  return (
    <div>
      <Head>
        <title>Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Header}>
        <h1 className={styles.Title}>Simple and Tasty Recipes</h1>
        <Search/>
      </div>
    </div>
  )
}
