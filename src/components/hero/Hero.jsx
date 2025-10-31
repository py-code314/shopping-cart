import styles from './Hero.module.css'
import searchIcon from '../../assets/images/search-icon.svg'

const Hero = () => {
  return ( 
    <section className={styles.hero}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.subtitle}>
          Make Your Life More Modern & Minimalistic
        </h2>
        <p className={styles.description}>Everything you want, all in one seamless shopping experience.</p>
        <form className={styles.form} action="">
          <input className={styles.search} type="search" />
          <button className={styles.btn} type='button'>
            <img src={searchIcon} alt="" width={30} height={30}  />
          </button>
        </form>
      </div>
    </section>
   );
}
 
export default Hero;