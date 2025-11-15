import { Link, useOutletContext } from 'react-router-dom'
import styles from './Cart.module.css'
import CartItem from '../cart-item/CartItem'

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
        {length > 0 ? <CartItem items={cartItems} /> : <p className={styles.emptyBag}>Your bag is currently empty.</p>}
        <div className={styles.actionGroup}>
          <Link className={styles.linkShop} to={'/shop'}>
            Return To Shop
          </Link>
          <button className={styles.btnClear} type="button" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
        <div className={styles.cartSummary}>
          <form className={styles.inputWrapper}>
            <label className={styles.visuallyHidden} htmlFor="coupon">Coupon code</label>
            <input type="text" className={styles.coupon} name="coupon" id='coupon' />
            <button type="submit" className={styles.btnCoupon} disabled>
              Apply Coupon
            </button>
          </form>
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
                <span className={`${styles.value} ${styles.estTotal}`}>${subTotal.toFixed(2)}</span>
              </li>
            </ul>
            <p className={styles.linkCheckout}>Proceed To Checkout</p>
          </div>
        </div>
      </div>
    
  )
}

export default Cart
