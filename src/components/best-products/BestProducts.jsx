import styles from './BestProducts.module.css'

import plusIcon from '../../assets/images/plus-icon.svg'
import rightArrow from '../../assets/images/arrow-right-icon.svg'
import brokenLink from '../../assets/images/broken-link.svg'
import { useData } from '../../hooks/useData'

import { Link, useOutletContext } from 'react-router-dom'

const BestProducts = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useOutletContext()

  const { data, isLoading, error } = useData(
    'https://fakestoreapi.com/products'
  )

  if (isLoading)
    return (
      <div className={styles.loaderWrapper}>
        <div data-testid='loading-spinner' className={styles.loader}></div>
      </div>
    )
  if (error)
    return (
      <div className={styles.errorWrapper}>
        <div className={styles.errorImage}>
          <img src={brokenLink} alt="" width={70} height={70} />
        </div>
        <div className={styles.errorContent}>
          <p>Something went wrong.</p>
          <p>Please try again.</p>
          <Link className={styles.linkRetry} to={'/home'}>
            Retry
          </Link>
        </div>
      </div>
    )

  const bestProducts = data.filter(
    (product) =>
      product.id === 2 ||
      product.id === 5 ||
      product.id === 12 ||
      product.id === 19
  )
  // console.log(bestProducts)
  // console.log(data)

  const handleSubmit = (id, image, title, price, quantity) => {
    // console.log('submit clicked')
    // e.preventDefault()

    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.id === id
      )
      // console.log(existingItemIndex)

      if (existingItemIndex > -1) {
        const updatedCartItems = [...prevCartItems]
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + quantity,
        }
        return updatedCartItems
      } else {
        // console.log('add new item')
        return [
          ...prevCartItems,
          {
            id: id,
            image: image,
            title: title,
            price: price,
            quantity: quantity,
          },
        ]
      }
    })
  }

  return (
    <section className={styles.bestProducts}>
      <h2 className={styles.subtitle}>Best Selling Products</h2>
      <ul className={styles.productList}>
        {bestProducts &&
          bestProducts.map((product) => (
            <li className={styles.product} key={product.id}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img className={styles.image} src={product.image} alt="" />
                </div>
                <div className={styles.contentWrapper}>
                  <p className={styles.category}>{product.category}</p>
                  <p className={styles.title}>{product.title}</p>
                  <p className={styles.rating}>
                    Rating:{' '}
                    <span className={styles.rate}>{product.rating.rate}</span>
                  </p>
                </div>
              </div>
              <div className={styles.buyWrapper}>
                <p className={styles.price}>
                  <span className={styles.dollar}>$</span>
                  {product.price.toFixed(2)}
                </p>
                <button
                  className={styles.btnAdd}
                  type="button"
                  aria-label="Add to cart"
                  title="Add To Cart"
                  onClick={() =>
                    handleSubmit(
                      product.id,
                      product.image,
                      product.title,
                      product.price,
                      1
                    )
                  }>
                  <img
                    className={styles.btnIcon}
                    src={plusIcon}
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </li>
          ))}
      </ul>
      <Link className={styles.linkAll} to={'/shop'}>
        View All
        <img src={rightArrow} alt="" width={30} height={20} />
      </Link>
    </section>
  )
}

export default BestProducts
