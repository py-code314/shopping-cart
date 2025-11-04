import styles from './Product.module.css'
import minusIcon from '../../assets/images/minus-icon.svg'
import plusIcon from '../../assets/images/plus-icon.svg'
import { useState } from 'react'
import { useOutletContext } from 'react-router'

const Product = ({ product }) => {
  const [cartItems, setCartItems] = useOutletContext()
  // const [cartItems, setCartItems] = useState([])
   

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

  const handleSubmit = (e, id, title, price, quantity) => {
    console.log('submit clicked')
    e.preventDefault()

    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.id === id)
      console.log(existingItemIndex)

      if (existingItemIndex > -1) {
        const updatedCartItems = [...prevCartItems]
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + quantity,
        }
        return updatedCartItems
      } else {
        console.log('add new item')
        return [...prevCartItems, {id: id, title: title, price: price, quantity: quantity}]
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
        onSubmit={(e) => handleSubmit(e, id, title, price, quantity)}>
        <div className={styles.inputWrapper}>
          <button
            className={styles.btnRemove}
            type="button"
            onClick={handleDecrement}>
            <img
              className={styles.btnIcon}
              src={minusIcon}
              alt=""
              width={20}
              height={20}
            />
          </button>
          <input
            className={styles.quantity}
            type="number"
            name="quantity"
            min={0}
            value={quantity}
            onChange={handleNumberChange}
            required
          />
          <button
            className={styles.btnAdd}
            type="button"
            onClick={handleIncrement}>
            <img
              className={styles.btnIcon}
              src={plusIcon}
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>
        <button className={styles.btnSubmit}
        type='submit'>
          Add To Cart
        </button>
      </form>
    </div>
  )
}

export default Product
