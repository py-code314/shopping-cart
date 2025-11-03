import styles from './Product.module.css'
import minusIcon from '../../assets/images/minus-icon.svg'
import plusIcon from '../../assets/images/plus-icon.svg'

const Product = ({product}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={product.image} alt="" />
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.rating}>
          Rating: <span className={styles.rate}>{product.rating.rate}</span>{' '}
          <span className={styles.count}>({product.rating.count})</span>
        </p>
        <p className={styles.price}>
          <span className={styles.dollar}>$</span>
          {product.price.toFixed(2)}
        </p>
      </div>
      <form className={styles.buyWrapper}>
        <div className={styles.inputWrapper}>
          <button className={styles.btnRemove} type="button">
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
            required
          />
          <button className={styles.btnAdd} type="button">
            <img
              className={styles.btnIcon}
              src={plusIcon}
              alt=""
              width={20}
              height={20}
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
 
export default Product;