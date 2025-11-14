import { render, screen } from '@testing-library/react'
import Product from './Product'
import userEvent from '@testing-library/user-event'

const mockSetCartItems = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useOutletContext: vi.fn(() => [[], mockSetCartItems]),
  }
})

const mockProduct = {
  id: 1,
  image: 'image.jpg',
  category: 'clothing',
  title: 'Backpack',
  rating: { rate: 4, count: 45 },
  price: 49,
}

describe('Product component', () => {
  it('renders Product', () => {
    const { asFragment } = render(<Product product={mockProduct} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders decrease and increase buttons', () => {
    render(<Product product={mockProduct} />)

    expect(
      screen.getByRole('button', { name: /decrease quantity/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /increase quantity/i })
    ).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    const { getByRole } = render(<Product product={mockProduct} />)

    const submitButton = getByRole('button', { name: /add to cart/i })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('renders a number input', () => {
    const { getByRole } = render(<Product product={mockProduct} />)
    const numberInput = getByRole('spinbutton', { name: /quantity/i })

    expect(numberInput).toBeInTheDocument()
    expect(numberInput).toHaveAttribute('type', 'number')
  })

  it('calls setCartItems function with button click', async () => {
    mockSetCartItems.mockClear()

    const user = userEvent.setup()

    render(<Product product={mockProduct} />)

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    })
    const submitButton = screen.getByRole('button', { name: /add to cart/i })

    await user.click(increaseButton)
    await user.click(submitButton)

    // expect(button).toBeInTheDocument()
    expect(mockSetCartItems).toHaveBeenCalled()
    expect(mockSetCartItems).toHaveBeenCalledTimes(1)
  })

  it('should decrease quantity by 1 with minus button click', async () => {
    const user = userEvent.setup()

    render(<Product product={mockProduct} />)

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    })
    const decreaseButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    })
    const numberInput = screen.getByRole('spinbutton', { name: /quantity/i })

    await user.click(increaseButton)
    await user.click(increaseButton)

    await user.click(decreaseButton)

    expect(numberInput).toHaveValue(1)

    await user.click(decreaseButton)

    expect(numberInput).toHaveValue(0)
  })
})
