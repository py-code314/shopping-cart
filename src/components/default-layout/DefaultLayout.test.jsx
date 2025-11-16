import styles from './DefaultLayout.module.css'
import DefaultLayout from './DefaultLayout'
import { render, screen } from '@testing-library/react'
import * as router from 'react-router-dom'

// Mock cartItems and setCartItems
const mockCartItems = [{ id: 1, quantity: 1 }]
const mockSetCartItems = vi.fn()

// Mock useOutletContext
vi.spyOn(router, 'useOutletContext').mockReturnValue([
  mockCartItems,
  mockSetCartItems,
])

// Mock Header module
vi.mock('../header/Header', () => {
  const mockHeader = vi.fn(() => (
    <div data-testid="mock-header">Mock Header</div>
  ))

  return {
    default: mockHeader,
  }
})

// Mock Outlet
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')

  return {
    ...actual,
    Outlet: vi.fn((props) => (
      <div data-testid="mock-outlet" {...props}>
        Mock Outlet
      </div>
    )),
  }
})

/* Test suite */
describe('DefaultLayout component', () => {
  it('wraps Header in backgroundColor div', () => {
    render(<DefaultLayout />)

    const headerWrapper = screen.getByTestId('mock-header').parentElement

    expect(headerWrapper).toHaveClass(styles.backgroundColor)
  })
})
