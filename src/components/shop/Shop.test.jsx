import { render, screen } from '@testing-library/react'
import Product from '../product/Product'
import Shop from './Shop'
import { useData } from '../../hooks/useData'

const mockProducts = [
  {
    id: 1,
    image: 'jacket.jpg',
    category: 'clothing',
    title: 'Jacket',
    rating: { rate: 4.2 },
    price: 49.99,
  },
  {
    id: 2,
    image: 'backpack.jpg',
    category: 'clothing',
    title: 'Backpack',
    rating: { rate: 4.0 },
    price: 39.99,
  },
  {
    id: 5,
    image: 'hard-drive.jpg',
    category: 'electronics',
    title: 'Hard Drive',
    rating: { rate: 4.4 },
    price: 99.99,
  },
]

vi.mock('../../hooks/useData', () => ({
  useData: vi.fn(() => ({
    data: mockProducts,
    isLoading: false,
    error: null,
  })),
}))

vi.mock('../product/Product', () => ({
  default: () => <div data-testid="mock-product">Mock Product</div>,
}))

describe('Shop component', () => {
  it('renders Shop component', () => {
    const { asFragment } = render(<Shop />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correct heading', () => {
    render(<Shop />)
    expect(
      screen.getByRole('heading', { name: /explore our products/i, level: 2 })
    ).toBeInTheDocument()
  })

  it('renders a list', () => {
    render(<Shop />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('should display error message if it fails to fetch the data', () => {
    vi.mocked(useData).mockReturnValueOnce({
      data: null,
      isLoading: false,
      error: 'Error fetching the data',
    })

    render(<Shop />)

    expect(screen.getByText('Error fetching the data')).toBeInTheDocument()
  })
})
