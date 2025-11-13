import styles from './Product.module.css'
import minusIcon from '../../assets/images/minus-icon.svg'
import plusIcon from '../../assets/images/plus-icon.svg'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const Product = ({ product }) => {
  const [cartItems, setCartItems] = useOutletContext()
   

  const { id, image, category, title, rating, price } = product
  const { rate, count } = rating

  const [quantity, setQuantity] = useState(0)

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
    // console.log('submit clicked')
    e.preventDefault()

    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.id === id)
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
        return [...prevCartItems, { id: id, image: image, title: title, price: price, quantity: quantity}]
      }
    })
  }
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt="" />
      </div>
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
      <form
        className={styles.buyWrapper}
        onSubmit={(e) => handleSubmit(e, id, image, title, price, quantity)}>
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
        <button className={styles.btnSubmit} type="submit">
          Add To Cart
        </button>
      </form>
    </div>
  )
}

export default Product
