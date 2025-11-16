import styles from './ChooseUs.module.css'
import rightArrow from '../../assets/images/arrow-right-icon.svg'

/* Displays why choose us section */
const ChooseUs = () => {
  return (
    <section className={styles.chooseUs}>
      <div className={styles.headingWrapper}>
        {/* Subtitle */}
        <h2 className={styles.subtitle}>Why Choose Us</h2>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        <div className={styles.card}>
          {/* Subheading */}
          <h3 className={styles.subheading}>Luxury Items</h3>

          <p className={styles.description}>
            Discover a curated selection of high-end goods, chosen for their
            uncompromising quality and impeccable craftsmanship.
          </p>

          {/* More info link */}
          <p className={styles.linkMore}>
            More Info
            <img src={rightArrow} alt="" width={30} height={20} />
          </p>
        </div>

        <div className={styles.card}>
          {/* Subheading */}
          <h3 className={styles.subheading}>Affordable Prices</h3>

          <p className={styles.description}>
            Premium quality should not break the bank. Enjoy the best items at
            prices designed for your budget.
          </p>

          {/* More info link */}
          <p className={styles.linkMore}>
            More Info
            <img src={rightArrow} alt="" width={30} height={20} />
          </p>
        </div>
        <div className={styles.card}>
          {/* Subheading */}
          <h3 className={styles.subheading}>Many Choices</h3>

          <p className={styles.description}>
            Explore an expansive catalog featuring thousands of items and
            hundreds of brands. Your perfect find is just a click away.
          </p>

          {/* More info link */}
          <p className={styles.linkMore}>
            More Info
            <img src={rightArrow} alt="" width={30} height={20} />
          </p>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
