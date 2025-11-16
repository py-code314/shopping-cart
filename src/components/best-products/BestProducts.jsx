import styles from './BestProducts.module.css'
import plusIcon from '../../assets/images/plus-icon.svg'
import rightArrow from '../../assets/images/arrow-right-icon.svg'
import brokenLink from '../../assets/images/broken-link.svg'
import { Link, useOutletContext } from 'react-router-dom'
import { useData } from '../../hooks/useData'

/* Displays best selling products */
const BestProducts = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useOutletContext()
  // Get data from 'fakestoreapi'
  const { data, isLoading, error } = useData(
    'https://fakestoreapi.com/products'
  )

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

  // Filter best selling products
  const bestProducts = data.filter(
    (product) =>
      product.id === 2 ||
      product.id === 5 ||
      product.id === 12 ||
      product.id === 19
  )

  // Adds product to cart
  const handleSubmit = (id, image, title, price, quantity) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.id === id
      )

      // Add product to cart if not already in cart
      if (existingItemIndex > -1) {
        const updatedCartItems = [...prevCartItems]
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + quantity,
        }
        return updatedCartItems
      } else {
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
      {/* Subtitle */}
      <h2 className={styles.subtitle}>Best Selling Products</h2>

      <ul className={styles.productList}>
        {bestProducts &&
          bestProducts.map((product) => (
            <li className={styles.product} key={product.id}>
              {/* Product Card */}
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

                {/* Add to cart button */}
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

      {/* View all button which redirects to shop */}
      <Link className={styles.linkAll} to={'/shop'}>
        View All
        <img src={rightArrow} alt="" width={30} height={20} />
      </Link>
    </section>
  )
}

export default BestProducts
