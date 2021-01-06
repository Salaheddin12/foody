import styles from './Card.module.css'
import Image from 'next/image'

export default  () => {
    return (
        <div className={styles.Wrapper}>
          <Image style={{borderRadius:'50%'}} src="/dish.jpg" width={150} height={150} layout='fixed'/> 
          <h2 className={styles.Label}>Chicken Vesuvio</h2>
          <h3 className={styles.DietLabel}>Low-Carb</h3>
          <div className={styles.Description}>
              <h2>121 Calories</h2>
              <h2>3 Ingredients</h2>
          </div>
        </div>
    );
};

