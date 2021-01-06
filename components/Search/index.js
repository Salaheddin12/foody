import React from 'react';
import styles from './Search.module.css'

export default () => {
    return (
        <div className={styles.Wrapper}>
            <input className={styles.search}/>
            <a className={styles.button} href="/search">Search</a>
        </div>
    );
};
