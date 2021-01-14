import styles from '../styles/Home.module.css'
import Search from '../components/Search'

export default function Home() {
  return (
      <div className={styles.Header}>
        <h1 className={styles.Title}>Simple and Tasty Recipes</h1>
        <Search/>
      </div>
  )
}
