import Home from './Home'
import { render, screen } from '@testing-library/react'

// Mock ChooseUs module
vi.mock('../choose-us/ChooseUs', () => ({
  default: () => <div data-testid="mock-choose-us">Mock Choose Us</div>,
}))

// Mock BestProducts module
vi.mock('../best-products/BestProducts', () => ({
  default: () => <div data-testid="mock-best-products">Mock Best Products</div>,
}))

/* Test Suite */
describe('Home component', () => {
  it('renders both ChooseUs and BestProducts components', () => {
    render(<Home />)

    expect(screen.getByTestId('mock-choose-us')).toBeInTheDocument()
    expect(screen.getByTestId('mock-best-products')).toBeInTheDocument()
  })
})
