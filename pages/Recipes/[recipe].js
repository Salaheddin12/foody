import Image from "next/image";
import styles from "./Recipe.module.css";
import axios from 'axios'
import Card from "../../components/Card";
const queryString = require('query-string');

const API_KEY= process.env.ADAMAM_API_KEY;

export default function ({selected,recipes}) {
  const suggestions = recipes.filter((item,index)=> item.recipe.uri!==selected && index<4);

  const selectedRecipe = recipes.filter((item)=> item.recipe.uri===selected)[0].recipe;
  
  const {label,ingredients,totalNutrients,image,healthLabels,dietLabels}=selectedRecipe;
  
  const {FAT,CHOCDF,CHOLE,PROCNT,VITC,VITD} = totalNutrients;

  const nutrients = [FAT,CHOCDF,CHOLE,PROCNT,VITC,VITD];

  const labels = healthLabels.concat(dietLabels);
  
  return (
    <div className={styles.container}>
      <div className={styles.recipeInfo}>
        <Image src={image} width={250} height={250} layout="fixed" />
        <h1 className={styles.title}>{label}</h1>
        <div>
          {
            labels.map((ingredient,index)=><span className={styles.label} key={index}>{ingredient}</span>)
          } 
        </div>
        <div className={styles.Wrapper}>
          <h2>Ingredients</h2>
           <ul>
          {
           ingredients.map((ingredient,index)=><li key={index}>{ingredient.text}</li>)
          } 
          </ul>
        </div>
        <div className={styles.Wrapper}>
          <h2>Nutrition</h2>
          <table style={{ width: "300px", margin: "1rem 0", lineHeight: "2" }}>
        {   nutrients.map(item=> <tr>
              <td className={styles.nutrientLabel}>{item.label}</td>
              <td>{`${Math.floor(item.quantity)}${item.unit}`}</td>
            </tr>)
          }
          </table>
        </div>
      </div>
      <div className={styles.suggestions}>
        <h1>Try also</h1>
          {suggestions.map(item=><Card recipe={item.recipe}/>)}
      </div>
      </div>
  );
}


export async function getServerSideProps({params}) {
  const parsedData = queryString.parse(params.recipe);
  const {query,selected} = parsedData;
  const {data} = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=07f8ce7f&app_key=${API_KEY}`)

  return {
    props: {recipes:data.hits,selected }
  }
}

