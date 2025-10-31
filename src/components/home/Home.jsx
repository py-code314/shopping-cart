import ChooseUs from '../choose-us/ChooseUs';
import Hero from '../hero/Hero';
import styles from './Home.module.css'

const Home = () => {
  return ( 
    <div className={styles.home}>
      {/* <Hero/> */}
      <ChooseUs/>
    </div>
   );
}
 
export default Home;