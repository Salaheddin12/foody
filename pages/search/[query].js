import styles from "../../styles/Search.module.css";
import Head from 'next/head'
import Card from "../../components/Card";
import Search from "../../components/Search";
import axios from "axios";

const API_KEY= localStorage.ADAMM_API_KEY;

export default function index({recipes,query}) {
  
  return (
    <div className="Container">
      <Head>
        <title>Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
      <div className={styles.Wrapper}>
        {
          recipes.map((item)=><Card recipe={item.recipe} query={query}/>)
        }
      </div>
    </div>
  );
}
export async function getServerSideProps({params}) {
  const  {query} = params;
  const {data} = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=07f8ce7f&app_key=${API_KEY}`)

  return {
    props: {recipes:data.hits,query }
  }
}



