import { useRouteError } from 'react-router'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <main className={styles.error}>
      <div className={styles.contentWrapper}>
        <h1>OOps!</h1>
        <p>Something's wrong here...</p>
        <p>We can't find the page you're looking for.</p>
        <p>
          Go back to{' '}
          <Link className={styles.linkHome}
          to={'/home'}>Home</Link>{' '}
          <br />
          or go to a <span className={styles.beach}>beach.</span>
        </p>
      </div>
    </main>
  )
}

export default ErrorPage
