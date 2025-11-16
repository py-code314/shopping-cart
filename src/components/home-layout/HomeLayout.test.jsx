import styles from './HomeLayout.module.css'
import HomeLayout from './HomeLayout'
import { render, screen } from '@testing-library/react'
import * as router from 'react-router-dom'

// Mock cartItems and setCartItems
const mockCartItems = [{ id: 1, quantity: 1 }]
const mockSetCartItems = vi.fn()

// Mock Header
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

// Mock useOutletContext
vi.spyOn(router, 'useOutletContext').mockReturnValue([
  mockCartItems,
  mockSetCartItems,
])

/* Test Suite */
describe('HomeLayout component', () => {
  it('wraps Header in backgroundWrapper div', () => {
    render(<HomeLayout />)

    const headerWrapper = screen.getByTestId('mock-header').parentElement

    expect(headerWrapper).toHaveClass(styles.backgroundWrapper)
  })
})
