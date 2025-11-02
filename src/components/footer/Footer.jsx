import styles from '../footer/Footer.module.css'
import facebookIcon from '../../assets/images/facebook.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import mastodonIcon from '../../assets/images/mastodon.svg'
import pinterestIcon from '../../assets/images/pinterest.svg'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <h2 className={styles.subtitle}>Anchor</h2>
        <p className={styles.description}>
          The full-scale department store experience, now just a click away.
          Shop top brands in fashion, home, and beauty. We're committed to
          offering the quality, selection, and service you expect from a trusted
          retail name.
        </p>
      </div>
      <div className={styles.customerService}>
        <h3 className={styles.subheading}>Customer Service</h3>
        <Link className={styles.faq}>FAQ and Help</Link>
        <Link className={styles.order}>Order Lookup</Link>
        <Link className={styles.returns}>Returns</Link>
        <Link className={styles.shipping}>Shipping & Delivery</Link>
      </div>
      <div className={styles.services}>
        <h3 className={styles.subheading}>Stores & Services</h3>
        <Link className={styles.pickup}>Curbside & In Store Pickup</Link>
        <Link className={styles.locations}>Locations & Hours</Link>
        <Link className={styles.events}>Store Events</Link>
        <Link className={styles.gifts}>Gift Registry</Link>
      </div>
      <div className={styles.follow}>
        <h3 className={styles.subheading}>Follow Us</h3>
        <a
          className={styles.socialWrapper}
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src={facebookIcon} alt="" />
          <p>Facebook</p>
        </a>

        <a
          className={styles.socialWrapper}
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src={mastodonIcon} alt="" />
          <p>X</p>
        </a>
        <a
          className={styles.socialWrapper}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src={instagramIcon} alt="" />
          <p>Instagram</p>
        </a>
        <a
          className={styles.socialWrapper}
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src={pinterestIcon} alt="" />
          <p>Pinterest</p>
        </a>
      </div>
      <div>
        <p>Copyright &copy; 2025</p>
        <Link>Terms & Conditions</Link>
        <Link>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer
