
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { MemoryRouter } from 'react-router'

// Mock Navbar
vi.mock('../navbar/Navbar', () => {
  return {
    default: () => <div>Mock Navbar</div>,
  } 
})

// Mock Hero section
vi.mock('../hero/Hero', () => {
  return {
    default: () => <div>Mock Hero section</div>,
  } 
})

describe('Header component', () => {
  it('renders Header with Hero section', () => {
    
    const { asFragment } = render(
      <MemoryRouter>
        <Header isHome={true} cartItems={[]}/>
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders Header without Hero section', () => {
    
    const { asFragment } = render(
      <MemoryRouter>
        <Header isHome={false} cartItems={[]}/>
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correct heading', () => {
    render(
      <MemoryRouter>
        <Header isHome={false} cartItems={[]} />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', {name: 'Anchor'})).toBeInTheDocument()
  })

  it('links to cart path', () => {
    render(
      <MemoryRouter>
        <Header isHome={false} cartItems={[]} />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', {name: /view cart/i})).toHaveAttribute('href', '/cart')
  })

  it('should show the correct number of items', () => {
    render(
      <MemoryRouter>
        <Header isHome={false} cartItems={[{ id: 1, quantity: 5 }]} />
      </MemoryRouter>
    )
    expect(screen.getByText('5')).toBeInTheDocument()
  })
})
