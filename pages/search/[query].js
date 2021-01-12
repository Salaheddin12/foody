import styles from "../../styles/Search.module.css";
import Head from 'next/head'
import Card from "../../components/Card";
import Search from "../../components/Search";
import axios from "axios";

export default function index({recipes,query}) {
  console.log(recipes,query);
  
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
  const {data} = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=07f8ce7f&app_key=2788be699b6b5eecad7e70824ab717ab`)

  return {
    props: {recipes:data.hits,query }
  }
}



