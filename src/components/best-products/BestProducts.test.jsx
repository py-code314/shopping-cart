import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import * as router from 'react-router-dom'
import BestProducts from './BestProducts'
import { useData } from '../../hooks/useData'

// Mock useOutletContext
const mockSetCartItems = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useOutletContext: vi.fn(() => [[], mockSetCartItems]),
  }
})

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

/* Test Suite */
describe('BestProducts component', () => {
  it('renders BestProducts', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <BestProducts />
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correct heading', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <BestProducts />
      </MemoryRouter>
    )
    const heading = getByRole('heading', {
      name: /best selling products/i,
      level: 2,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders only best selling products', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <BestProducts />
      </MemoryRouter>
    )
    const productItems = getAllByRole('listitem')

    expect(productItems).toHaveLength(2)
  })

  it('renders two buttons of type button', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <BestProducts />
      </MemoryRouter>
    )
    const buttons = getAllByRole('button')

    expect(buttons).toHaveLength(2)
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('type', 'button')
    })
  })

  it('should display error message if it fails to fetch the data', () => {
    vi.mocked(useData).mockReturnValueOnce({
      data: null,
      isLoading: false,
      error: 'Error',
    })

    render(
      <MemoryRouter>
        <BestProducts />
      </MemoryRouter>
    )

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument()
    expect(screen.getByText('Retry')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /retry/i })).toHaveAttribute(
      'href',
      '/home'
    )
  })

  it('should display loading animation while fetching the data', () => {
    vi.mocked(useData).mockReturnValueOnce({
      data: null,
      isLoading: true,
      error: null,
    })

    render(
      <MemoryRouter>
        <BestProducts />
      </MemoryRouter>
    )

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('adds item to cart on Add button click', async () => {
    router.useOutletContext.mockReturnValueOnce([[], mockSetCartItems])
    mockSetCartItems.mockClear()

    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <BestProducts />
      </MemoryRouter>
    )

    const buttons = screen.getAllByRole('button', { name: /add to cart/i })

    await user.click(buttons[0])

    expect(mockSetCartItems).toHaveBeenCalledTimes(1)
  })

  it('redirects View All link to shop', () => {
    render(
      <MemoryRouter>
        <BestProducts />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /view all/i })).toHaveAttribute(
      'href',
      '/shop'
    )
  })
})
