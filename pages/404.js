import styles from '../styles/Search.module.css'
export default function Custom404() {
  return (
    <div className="Container">
      <div className={styles.error}>
        Sorry! we can't find what you're looking for 😌. go to the{" "}
        <a className={styles.homeRedirect} href="/">home page</a> 😊.
      </div>
    </div>
  );
}
