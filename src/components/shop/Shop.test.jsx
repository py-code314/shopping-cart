import Shop from './Shop'
import { useData } from '../../hooks/useData'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

// Mock products data
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

// Mock useData
vi.mock('../../hooks/useData', () => ({
  useData: vi.fn(() => ({
    data: mockProducts,
    isLoading: false,
    error: null,
  })),
}))

// Mock Product module
vi.mock('../product/Product', () => ({
  default: () => <div data-testid="mock-product">Mock Product</div>,
}))

/* Test Suite */
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

  it('should display loading animation while fetching the data', () => {
    vi.mocked(useData).mockReturnValueOnce({
      data: null,
      isLoading: true,
      error: null,
    })

    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    )

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('should display error message if it fails to fetch the data', () => {
    vi.mocked(useData).mockReturnValueOnce({
      data: null,
      isLoading: false,
      error: 'Error',
    })

    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    )

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument()
    expect(screen.getByText('Retry')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /retry/i })).toHaveAttribute(
      'href',
      '/shop'
    )
  })
})
