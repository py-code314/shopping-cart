import {render, screen} from '@testing-library/react'
import Home from './Home'

vi.mock('../choose-us/ChooseUs', () => ({
  default: () => <div data-testid='mock-choose-us'>Mock Choose Us</div>
}))

vi.mock('../best-products/BestProducts', () => ({
  default: () => <div data-testid="mock-best-products">Mock Best Products</div>,
}))



describe('Home component', () => {
  it('renders both ChooseUs and BestProducts components', () => {
    render(<Home/>)

    expect(screen.getByTestId('mock-choose-us')).toBeInTheDocument()
    expect(screen.getByTestId('mock-best-products')).toBeInTheDocument()
  })
})