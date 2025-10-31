import styles from './ChooseUs.module.css'
import rightArrow from '../../assets/images/arrow-right-icon.svg'

const ChooseUs = () => {
  return (
    <section className={styles.chooseUs}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.subtitle}>Why Choose Us</h2>
      </div>
      <div className={styles.luxury}>
        <h3 className={styles.subheading}>Luxury Items</h3>
        <p className={styles.description}>
          Discover a curated selection of high-end goods, chosen for their
          uncompromising quality and impeccable craftsmanship.
        </p>
        <a className={styles.inactiveLink} href="#">
          More Info
          <img src={rightArrow} alt="" width={30} height={20} />
        </a>
      </div>
      <div className={styles.prices}>
        <h3 className={styles.subheading}>Affordable Prices</h3>
        <p className={styles.description}>
          Premium quality shouldn't break the bank. Enjoy the best items at
          prices designed for your budget.
        </p>
        <a className={styles.inactiveLink} href="#">
          More Info
          <img src={rightArrow} alt="" width={30} height={20} />
        </a>
      </div>
      <div className={styles.choices}>
        <h3 className={styles.subheading}>Many Choices</h3>
        <p className={styles.description}>
          Explore an expansive catalog featuring thousands of items and hundreds
          of brands. Your perfect find is just a click away.
        </p>
        <a className={styles.inactiveLink} href="#">
          More Info
          <img src={rightArrow} alt="" width={30} height={20} />
        </a>
      </div>
    </section>
  )
}

export default ChooseUs
