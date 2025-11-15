import styles from './CartItem.module.css'
import minusIcon from '../../assets/images/minus-icon-black.svg'
import plusIcon from '../../assets/images/plus-icon-black.svg'
import deleteIcon from '../../assets/images/delete-icon.svg'
import { useOutletContext } from 'react-router-dom'
// import { useState } from 'react'

const CartItem = ({ items }) => {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useOutletContext()
  // const [quantity, setQuantity] = useState(0)
  // console.log(cartItems)

  const handleIncrement = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.map((item) => {
        if (item.id === id) {
          // Convert quantity into number when user empties input (input value will be - '') and uses button to change the number
          return { ...item, quantity: Number(item.quantity + 1) }
        } else {
          return item
        }
      })
      return updatedCart
    })
  }

  const handleDecrement = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.map((item) => {
        if (item.id === id) {
          // No need to convert quantity into number when user empties input and clicks minus button as ('' - 1) value is -1
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })
      return updatedCart.filter((item) => item.quantity > 0)
    })
  }

  const handleInputChange = (e, id) => {
    const newQuantity = Number(e.target.value)

    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.map((item) => {
        if (item.id === id) {
          // If newQuantity is NaN don't change the value
          // If user empties input quantity value is empty string
          // After which if user enters a number into input, change it to a number and assign it to quantity
          return {
            ...item,
            quantity: isNaN(newQuantity)
              ? item.quantity
              : e.target.value === ''
              ? ''
              : newQuantity,
          }
        } else {
          return item
        }
      })
      // If user empties input don't remove the item yet, wait until user enter a number.
      return updatedCart.filter(
        (item) => item.quantity > 0 || item.quantity === ''
      )
    })
  }

  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRow}>
          <th className={`${styles.tableHeading} ${styles.product}`}>
            <div className={styles.emptyDiv}></div>
            Product
          </th>
          <th className={`${styles.tableHeading} ${styles.price}`}>Price</th>
          <th className={`${styles.tableHeading} ${styles.noOfItems}`}>
            Quantity
          </th>
          <th className={`${styles.tableHeading} ${styles.subTotal}`}>
            Subtotal
          </th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map((item) => (
          <tr className={`${styles.tableRow} ${styles.cartItem}`} key={item.id}>
            <td className={`${styles.tableCell} ${styles.product}`}>
              <button className={styles.deleteBtn}>
                <img
                  className={styles.deleteIcon}
                  src={deleteIcon}
                  alt=""
                  width={32}
                  height={32}
                />
              </button>
              <div className={styles.imageTitleWrapper}>
                <img
                  className={styles.image}
                  src={item.image}
                  alt=""
                  width={50}
                />
                <p className={styles.title}>{item.title}</p>
              </div>
            </td>

            <td className={`${styles.tableCell} ${styles.price}`}>
              ${item.price.toFixed(2)}
            </td>
            <td className={`${styles.tableCell} ${styles.noOfItems}`}>
              <div className={styles.inputWrapper}>
                <button
                  className={styles.btnQuantity}
                  type="button"
                  aria-label="Decrease quantity by one"
                  title="Decrease quantity"
                  onClick={() => handleDecrement(item.id)}>
                  <img
                    className={styles.btnIcon}
                    src={minusIcon}
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>
                <label className={styles.visuallyHidden} htmlFor={item.id}>
                  Quantity
                </label>
                <input
                  id={item.id}
                  className={styles.quantity}
                  type="number"
                  name="quantity"
                  min={0}
                  value={item.quantity}
                  onChange={(e) => handleInputChange(e, item.id)}
                />
                <button
                  className={styles.btnQuantity}
                  type="button"
                  aria-label="Increase quantity by one"
                  title="Increase quantity"
                  onClick={() => handleIncrement(item.id)}>
                  <img
                    className={styles.btnIcon}
                    src={plusIcon}
                    alt=""
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </td>
            <td className={`${styles.tableCell} ${styles.subTotal}`}>
              ${(item.price * item.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CartItem
