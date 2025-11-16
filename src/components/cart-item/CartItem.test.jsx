import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import CartItem from './CartItem'

// Mock items prop
const mockItems = [
  {
    id: 1,
    image: 'jacket.jpg',
    title: 'Jacket',
    price: 49.99,
    quantity: 1,
  },
]

// Mock cartItems
const mockCartItems = [
  {
    id: 1,
    image: 'jacket.jpg',
    title: 'Jacket',
    price: 49.99,
    quantity: 1,
  },
]

// Mock setCartItems
const mockSetCartItems = vi.fn()

// Mock useOutletContext
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useOutletContext: vi.fn(() => [mockCartItems, mockSetCartItems]),
  }
})

/* Test suite */
describe('CartItem component', () => {
  it('renders CartItem', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CartItem items={mockItems} />
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a table', () => {
    render(
      <MemoryRouter>
        <CartItem items={mockItems} />
      </MemoryRouter>
    )

    const table = screen.getByRole('table')

    expect(table).toBeInTheDocument()
  })

  it('renders a cart item', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <CartItem items={mockItems} />
      </MemoryRouter>
    )
    const numberInput = getByRole('spinbutton', { name: /quantity/i })

    expect(numberInput).toBeInTheDocument()
  })

  it('should update quantity when clicked on minus or plus buttons', async () => {
    const user = userEvent.setup()
    mockSetCartItems.mockClear()

    render(
      <MemoryRouter>
        <CartItem items={mockItems} />
      </MemoryRouter>
    )

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    })

    await user.click(increaseButton)

    expect(mockSetCartItems).toHaveBeenCalledTimes(1)

    const decreaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    })

    await user.click(decreaseButton)

    expect(mockSetCartItems).toHaveBeenCalledTimes(2)
  })

  it('should remove item from cart with Delete button click', async () => {
    const user = userEvent.setup()
    mockSetCartItems.mockClear()

    render(
      <MemoryRouter>
        <CartItem items={mockItems} />
      </MemoryRouter>
    )

    const deleteButton = screen.getByRole('button', {
      name: /remove item/i,
    })

    await user.click(deleteButton)

    expect(mockSetCartItems).toHaveBeenCalledTimes(1)
  })
})
