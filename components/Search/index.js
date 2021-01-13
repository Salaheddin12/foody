import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Search.module.css'

const Joi = require('joi');
export default () => {

const schema = Joi.object({
    search: Joi.string()
        .min(3)
        .max(30)
        .required(),
    });

    const [Query, setQuery] = useState('');
    const [error, setError] = useState('');

    const onQueryChange = (e)=>{
    e.preventDefault
    const query = e.currentTarget.value;
    const val=schema.validate({search:query})
        if(val.error){
        setError(val.error.message)
        }
        else{
            setError('')
            setQuery(query)
        }
    }

    const OnSearchSubmit = ()=>{
        if(error===''){
            window.open(`/search/${Query}`)
        }
        else{
            toast.error(error);
        }
    }
    return (
        <>
        <div className={styles.Wrapper}>
            <input className={styles.search} onChange={(e)=>onQueryChange(e) }/>
            <button className={styles.button} onClick={()=>OnSearchSubmit()} >Search</button>
        </div>
        <ToastContainer />
        </>
    );
};
