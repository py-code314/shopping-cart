import styles from './Shop.module.css'
import { useData } from '../../hooks/useData'
import Product from "../product/Product";
import brokenLink from '../../assets/images/broken-link.svg'
import { Link } from 'react-router-dom';


const Shop = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useData('https://fakestoreapi.com/produts')

  if (isLoading)
      return (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}></div>
        </div>
      )
  if (error) return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorImage}>
        <img src={brokenLink} alt="" width={70} height={70} />
      </div>
      <div className={styles.errorContent}>
        <p>Something went wrong.</p>
        <p>Please try again.</p>
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
        <h2 className={styles.subtitle}>Explore Our Products</h2>
      </div>
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

//? Form validation

export default Shop
