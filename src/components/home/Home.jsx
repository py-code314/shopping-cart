import ChooseUs from '../choose-us/ChooseUs'
import BestProducts from '../best-products/BestProducts'
import Hero from '../hero/Hero'
import styles from './Home.module.css'

const Home = ({ isHome }) => {
  return (
    <div className={styles.home}>
      {isHome && <Hero />}
      <ChooseUs />
      <BestProducts />
    </div>
  )
}

export default Home
