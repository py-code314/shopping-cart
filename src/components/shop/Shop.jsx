import styles from './Shop.module.css'
import { useData } from '../../hooks/useData'
import  Product  from "../product/Product";


//TODO: Fix showing Hero section on Shop page refresh

const Shop = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useData('https://fakestoreapi.com/products')

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <section className={styles.shop}>
      <h2 className={styles.subtitle}>Explore Our Products</h2>
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
