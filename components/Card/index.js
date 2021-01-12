import styles from './Card.module.css'
import Image from 'next/image'

const queryString = require('query-string');

export default  ({recipe,query}) => {
    const {calories,image,label,dietLabels,healthLabels,ingredients} = recipe;
    const labels =dietLabels.concat(healthLabels);
    const data = {
        selected:recipe.uri,
        query};

    return (
        <a className={styles.Wrapper} href={`/Recipes/${queryString.stringify(data)}`}>
          <Image src={image} width={150} height={150} layout='fixed'/> 
          <h2 className={styles.Label}>{label||''}</h2>
          <h3 className={styles.Labels}>{labels.join(', ')}</h3>
          <div className={styles.Description}>
              <h2>{Math.floor(calories)} Calories</h2>
              <h2>{ingredients.length} Ingredients</h2>
          </div>
        </a>
    );
};

