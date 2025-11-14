import styles from './Shop.module.css'
import { useData } from '../../hooks/useData'
import  Product  from "../product/Product";


const Shop = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useData('https://fakestoreapi.com/products')

  if (isLoading)
      return (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}></div>
        </div>
      )
  if (error) return <div>{error}</div>

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
