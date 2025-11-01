import { useState, useEffect } from 'react'
import styles from './BestProducts.module.css'
import { Link } from 'react-router'
import plusIcon from '../../assets/images/plus-icon.svg'

const BestProducts = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`)
        }
        let data = await response.json()
        setData(data)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>


  const bestProducts = data.filter(
    (product) =>
      product.id === 2 ||
      product.id === 5 ||
      product.id === 12 ||
      product.id === 19
  )
  // console.log(bestProducts)
  // console.log(data)

  return (
    <section className={styles.bestProducts}>
      <ul>
        {bestProducts &&
          bestProducts.map((product) => (
            <li key={product.id}>
              <Link>
                <img src={product.image} alt="" />
                <p>{product.category}</p>
                <p>{product.title}</p>
                <p>{product.rating.rate}</p>
                <p>{product.price}</p>
                <button>
                  <img src={plusIcon} alt="" width={20} height={20} />
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default BestProducts
