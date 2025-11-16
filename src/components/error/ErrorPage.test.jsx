import {render, screen} from '@testing-library/react'
import ErrorPage from './ErrorPage'
import { MemoryRouter } from 'react-router-dom'

describe('ErrorPage component', () => {
  it('render ErrorPage', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <ErrorPage/>
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