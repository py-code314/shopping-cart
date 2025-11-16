import styles from './Shop.module.css'
import Product from '../product/Product'
import brokenLink from '../../assets/images/broken-link.svg'
import { useData } from '../../hooks/useData'
import { Link } from 'react-router-dom'

/* Displays a list of products */
const Shop = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useData('https://fakestoreapi.com/products')

  // Show loading spinner while fetching the data
  if (isLoading)
    return (
      <div className={styles.loaderWrapper}>
        <div data-testid="loading-spinner" className={styles.loader}></div>
      </div>
    )

  // Show error message upon failure to fetch the data
  if (error)
    return (
      <div className={styles.errorWrapper}>
        {/* Error message image */}
        <div className={styles.errorImage}>
          <img src={brokenLink} alt="" width={70} height={70} />
        </div>
        {/* Error message content */}
        <div className={styles.errorContent}>
          <p>Something went wrong.</p>
          <p>Please try again.</p>
          {/* Link to shop page */}
          <Link className={styles.linkRetry} to={'/shop'}>
            Retry
          </Link>
        </div>
      </div>
    )

  return (
    <section className={styles.shop}>
      <div className={styles.subtitleWrapper}>
        <div className={styles.decor}></div>

        {/* Subtitle */}
        <h2 className={styles.subtitle}>Explore Our Products</h2>
      </div>

      {/* List of products */}
      <ul className={styles.productList}>
        {products &&
          products.map((product) => (
            <li className={styles.product} key={product.id}>
              <Product product={product} />
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Shop
