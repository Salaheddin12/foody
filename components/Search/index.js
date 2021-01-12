import React from 'react';
import styles from './Search.module.css'
import {useState} from 'react'

export default () => {
    const [Query, setQuery] = useState('');

    const onQueryChange = (query)=>{
        setQuery(query)
    }
    return (
        <div className={styles.Wrapper}>
            <input className={styles.search} onChange={(e)=>onQueryChange(e.currentTarget.value)}/>
            <a className={styles.button} href={`/search/${Query}`}>Search</a>
        </div>
    );
};
