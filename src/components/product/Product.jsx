import styles from './Product.module.css'
import minusIcon from '../../assets/images/minus-icon.svg'
import plusIcon from '../../assets/images/plus-icon.svg'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

/* Displays a single product */
const Product = ({ product }) => {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useOutletContext()
  const [quantity, setQuantity] = useState(0)

  // Destructure product data
  const { id, image, category, title, rating, price } = product
  const { rate, count } = rating

  // Event handlers
  const handleNumberChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleSubmit = (e, id, image, title, price, quantity) => {
    e.preventDefault()

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
    <div className={styles.card}>
      {/* Product image */}
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt="" />
      </div>

      {/* Product details */}
      <div className={styles.contentWrapper}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.rating}>
          Rating: <span className={styles.rate}>{rate}</span>{' '}
          <span className={styles.count}>({count})</span>
        </p>
        <p className={styles.price}>
          <span className={styles.dollar}>$</span>
          {price.toFixed(2)}
        </p>
      </div>

      {/* Add to cart form */}
      <form
        className={styles.buyWrapper}
        onSubmit={(e) => handleSubmit(e, id, image, title, price, quantity)}>
        {/* Quantity input with buttons */}
        <div className={styles.inputWrapper}>
          <button
            className={styles.btnRemove}
            type="button"
            aria-label="Decrease quantity by one"
            title="Decrease quantity"
            onClick={handleDecrement}>
            <img
              className={styles.btnIcon}
              src={minusIcon}
              alt=""
              width={32}
              height={32}
            />
          </button>
          <label className={styles.visuallyHidden} htmlFor={id}>
            Quantity
          </label>
          {/* Add max value to make input shrinkable  */}
          <input
            className={styles.quantity}
            id={id}
            type="number"
            name="quantity"
            min={1}
            max={1000}
            value={quantity}
            onChange={handleNumberChange}
            required
          />
          <button
            className={styles.btnAdd}
            type="button"
            aria-label="Increase quantity by one"
            title="Increase quantity"
            onClick={handleIncrement}>
            <img
              className={styles.btnIcon}
              src={plusIcon}
              alt=""
              width={32}
              height={32}
            />
          </button>
        </div>

        {/* Add to cart button */}
        <button className={styles.btnSubmit} type="submit">
          Add To Cart
        </button>
      </form>
    </div>
  )
}

export default Product
