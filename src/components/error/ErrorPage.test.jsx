import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'

/* Test suite */
describe('ErrorPage component', () => {
  it('renders ErrorPage', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    )
    const heading = getByRole('heading', { name: /sorry/i, level: 1 })

    expect(heading).toBeInTheDocument()
  })

  it('links to Home page', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    )
    const homeLink = getByRole('link', { name: /home/i })

    expect(homeLink).toHaveAttribute('href', '/home')
  })
})
