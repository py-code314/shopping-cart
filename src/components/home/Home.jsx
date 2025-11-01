import ChooseUs from '../choose-us/ChooseUs';
import FeaturedProducts from '../best-products/BestProducts';
import Hero from '../hero/Hero';
import styles from './Home.module.css'

const Home = () => {
  return ( 
    <div className={styles.home}>
      {/* <Hero/> */}
      <ChooseUs />
      <FeaturedProducts/>
    </div>
   );
}
 
export default Home;