import { render, screen } from '@testing-library/react'
import BestProducts from './BestProducts'
import { MemoryRouter } from 'react-router'

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
})
