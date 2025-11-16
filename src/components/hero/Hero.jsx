import styles from './Hero.module.css'
import searchIcon from '../../assets/images/search-icon.svg'

/* Displays Hero section */
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.contentWrapper}>
        {/* Subtitle */}
        <h2 className={styles.subtitle}>
          Make Your Life More Modern & Minimalistic
        </h2>

        <p className={styles.description}>
          Everything you want, all in one seamless shopping experience.
        </p>

        {/* Search bar */}
        <form className={styles.form} action="">
          <label className={styles.visuallyHidden} htmlFor="search">
            Search for products
          </label>
          <input
            className={styles.search}
            type="search"
            name="search"
            id="search"
            placeholder="Search for products..."
          />

          {/* Search button */}
          <button
            className={styles.btnSearch}
            type="submit"
            aria-label="Search for products"
            title="Search"
            disabled>
            <img src={searchIcon} alt="" width={40} height={40} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero
