import { render } from '@testing-library/react'
import Hero from './Hero'
// import { MemoryRouter } from 'react-router'

describe('Hero component', () => {
  it('renders Hero section', () => {
    const { asFragment } = render(<Hero />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders search input with placeholder', () => {
    const { getByRole } = render(<Hero />)
    const searchInput = getByRole('searchbox', {name: /search for products/i})
    expect(searchInput).toBeInTheDocument()
    expect(searchInput).toHaveAttribute('placeholder', 'Search for products...')
  })

  it('renders search button', () => {
    const { getByRole } = render(<Hero />)
    const searchButton = getByRole('button', {name: /search for products/i})
    expect(searchButton).toBeInTheDocument()
    expect(searchButton).toHaveAttribute('type', 'submit')
  })

  
})
