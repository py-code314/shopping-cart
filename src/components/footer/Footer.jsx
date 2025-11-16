import styles from '../footer/Footer.module.css'
import facebookIcon from '../../assets/images/facebook.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import mastodonIcon from '../../assets/images/mastodon.svg'
import pinterestIcon from '../../assets/images/pinterest.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        {/* Primary footer */}
        <div className={styles.footerPrimary}>
          <div className={`${styles.about} ${styles.card}`}>
            {/* Subtitle */}
            <h2 className={styles.subtitle}>Anchor</h2>
            <p className={styles.description}>
              The full-scale department store experience, now just a click away.
              Shop top brands in fashion, home, and beauty.
            </p>
          </div>

          {/* Cards */}
          <div className={styles.card}>
            {/* Subheading */}
            <h3 className={styles.subheading}>Customer Service</h3>

            {/* Footer list */}
            <ul className={styles.footerListPrimary}>
              {/* Using 'span' instead of 'Link' as it's giving an alert on Accessibility check */}
              <li>
                <span className={styles.footerLink}>FAQ and Help</span>
              </li>
              <li>
                <span className={styles.footerLink}>Order Lookup</span>
              </li>
              <li>
                <span className={styles.footerLink}>Returns</span>
              </li>
              <li>
                <span className={styles.footerLink}>Shipping & Delivery</span>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            {/* Subheading */}
            <h3 className={styles.subheading}>Stores & Services</h3>

            {/* Footer list */}
            <ul className={styles.footerListPrimary}>
              <li className={styles.footerListItem}>
                <span className={styles.footerLink}>
                  Curbside & In Store Pickup
                </span>
              </li>
              <li className={styles.footerListItem}>
                <span className={styles.footerLink}>Locations & Hours</span>
              </li>
              <li className={styles.footerListItem}>
                <span className={styles.footerLink}>Store Events</span>
              </li>
              <li className={styles.footerListItem}>
                <span className={styles.footerLink}>Gift Registry</span>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            {/* Subheading */}
            <h3 className={styles.subheading}>Follow Us</h3>

            {/* Footer list */}
            <ul className={styles.footerListPrimary}>
              <li className={styles.footerListItem}>
                <a
                  className={styles.footerLink}
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={facebookIcon} alt="" />
                  <p>Facebook</p>
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  className={styles.footerLink}
                  href="https://mastodon.social/explore"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={mastodonIcon} alt="" />
                  <p>Mastodon</p>
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  className={styles.footerLink}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={instagramIcon} alt="" />
                  <p>Instagram</p>
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  className={styles.footerLink}
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={pinterestIcon} alt="" />
                  <p>Pinterest</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary footer */}
        <div className={styles.footerSecondary}>
          <p className={styles.copyright}>Copyright &copy; 2025</p>

          {/* Footer list */}
          <ul className={styles.footerListSecondary}>
            <li className={styles.footerListItem}>
              <span className={styles.footerLink}>Terms & Conditions</span>
            </li>
            <li className={styles.footerListItem}>
              <span className={styles.footerLink}>Privacy Policy</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
