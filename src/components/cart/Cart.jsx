import { useOutletContext } from 'react-router'
import styles from './Cart.module.css'
import { Link } from 'react-router'
import CartItems from '../cart-items/CartItems'

const Cart = () => {
  const [cartItems, setCartItems] = useOutletContext()
  const subTotal = cartItems.reduce((total, product) => total + product.price, 0)
  const length = cartItems.length


  const handleClearCart = () => {
    setCartItems([])
  }

  return (
    <div className={styles.cart}>
      <div className={styles.subtitleWrapper}>
        <div className={styles.decor}></div>
        <h2 className={styles.subtitle}>Cart</h2>
      </div>
      {length > 0 ? <CartItems items={cartItems} /> : <p className={styles.emptyBag}>Your bag is currently empty.</p>}
      <div className={styles.actionGroup}>
        <Link className={styles.linkShop} to={'/shop'}>
          Return To Shop
        </Link>
        <button className={styles.btnClear} type="button" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      <div className={styles.cartSummary}>
        <div className={styles.inputWrapper}>
          <input type="text" className={styles.coupon} name="coupon" />
          <button type="button" className={styles.btnCoupon}>
            Apply Coupon
          </button>
        </div>
        <div className={styles.cartTotal}>
          <h3 className={styles.subheading}>Cart Total</h3>
          <ul className={styles.totalList}>
            <li className={styles.totalItem}>
              <span className={styles.label}>Subtotal</span>
              <span className={styles.value}>${subTotal.toFixed(2)}</span>
            </li>
            <li className={styles.totalItem}>
              <span className={styles.label}>Savings</span>
              <span className={styles.value}>$0.00</span>
            </li>
            <li className={styles.totalItem}>
              <span className={styles.label}>Shipping</span>
              <span className={styles.value}>Free</span>
            </li>
            <li className={styles.totalItem}>
              <span className={styles.label}>Tax</span>
              <span className={styles.value}>TBD</span>
            </li>
            <li className={styles.totalItem}>
              <span className={styles.label}>Estimated Total</span>
              <span className={styles.value}>${subTotal.toFixed(2)}</span>
            </li>
          </ul>
          <Link className={styles.linkCheckout}>Proceed To Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
