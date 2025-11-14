import { render, screen } from '@testing-library/react'
import { MemoryRouter, useOutletContext } from 'react-router-dom'
import Cart from './Cart'
import userEvent from '@testing-library/user-event'


const mockSetCartItems = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useOutletContext: vi.fn(() => [[], mockSetCartItems]),
  }
})

vi.mock('../cart-item/CartItem', () => ({
  default: () => <div data-testid='mock-cart-item'>Mock Cart Item</div>
}))

describe('Cart component', () => {
  it('renders empty Cart with text your bag is currently empty', () => {
    const { asFragment, getByText } = render(<MemoryRouter>
      <Cart />
    </MemoryRouter>)
    const para = getByText('Your bag is currently empty.')



    expect(asFragment()).toMatchSnapshot()
    expect(para).toBeInTheDocument()
  })
  
  it('renders Cart with one item', () => {
    useOutletContext.mockReturnValueOnce([[
      {
        id: 1,
        image: 'jacket.jpg',
        category: 'clothing',
        title: 'Jacket',
        rating: { rate: 4.2 },
        price: 49.99,
      },
    ],
      mockSetCartItems])
    
    const { asFragment } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correct heading', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    )
    const heading = getByRole('heading', { name: /cart/i, level: 2 })
    
    expect(heading).toBeInTheDocument()
  })

  it('correctly links to Shop page', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    )
    const shopLink = getByRole('link', { name: /return to shop/i })
    
    expect(shopLink).toHaveAttribute('href', '/shop')
  })

  it('renders two buttons', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    )

    const clearButton = screen.getByRole('button', { name: /clear cart/i })
    const couponButton = screen.getByRole('button', { name: /apply coupon/i })
    
    expect(clearButton).toBeInTheDocument()
    expect(couponButton).toBeInTheDocument()
  })

  it('clears cart when Clear Cart button is clicked', async () => {
    mockSetCartItems.mockClear()
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    )

    const clearButton = screen.getByRole('button', { name: /clear cart/i })

    await user.click(clearButton)

    expect(mockSetCartItems).toHaveBeenCalledTimes(1)
  })

  it('renders correct subheading', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    )
    const subheading = getByRole('heading', { name: /cart total/i, level: 3 })
    
    expect(subheading).toBeInTheDocument()
  })
})