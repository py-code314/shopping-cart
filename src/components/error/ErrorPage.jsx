import { Link} from 'react-router-dom'
import styles from './ErrorPage.module.css'


const ErrorPage = () => {
  // const error = useRouteError()
  // console.error(error)

  return (
    <main className={styles.error}>
      <div className={styles.contentWrapper}>
        <h1>Sorry!</h1>
        <p>Something's wrong here...</p>
        <p>We can't find the page you're looking for.</p>
        <p>
          Go back to &nbsp;
          <Link className={styles.linkHome} to={'/home'}>
            Home
          </Link>{' '}
          <br />
          or go to a &nbsp;&nbsp;&nbsp;
          <span className={styles.beach}>beach.</span>
        </p>
      </div>
    </main>
  )
}

export default ErrorPage
