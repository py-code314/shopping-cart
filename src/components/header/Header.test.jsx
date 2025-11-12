
import { render } from '@testing-library/react'
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
})
