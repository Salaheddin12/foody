import Card from "../../components/Card";
import Search from "../../components/Search";
import styles from "../../styles/Search.module.css";
import axios from "axios";

const API_KEY= process.env.ADAMAM_API_KEY;

export default function index({recipes,query}) {
  console.log(recipes);

  return (
    <div className="Container">
      <Search />
      {recipes.length==0?
          <div className={styles.error}>
            Sorry! we didn't find anthing about '{query}'😌.
            try searching for somthing else 😀
          </div>
        :
      <div className={styles.Wrapper}>
        {
          recipes.map((item)=><Card recipe={item.recipe} query={query}/>)
        }
      </div>
      }
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



