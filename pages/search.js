import styles from '../styles/Search.module.css';
import Card from '../components/Card'
import Search from '../components/Search';

export default function index(){
    return (
        <div className="Container">
            <Search/>
           <div className={styles.Wrapper}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};


