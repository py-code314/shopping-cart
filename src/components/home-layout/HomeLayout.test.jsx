import { render, screen } from '@testing-library/react'
import HomeLayout from './HomeLayout'
import * as router from 'react-router-dom'
import styles from './HomeLayout.module.css'

const mockCartItems = [{ id: 1, quantity: 1 }]
const mockSetCartItems = vi.fn()

vi.mock('../header/Header', () => {
  const mockHeader = vi.fn(() => (
    <div data-testid="mock-header">Mock Header</div>
  ))
  return {
    default: mockHeader,
  }
})

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

vi.spyOn(router, 'useOutletContext').mockReturnValue([
  mockCartItems,
  mockSetCartItems,
])

describe('HomeLayout component', () => {
  it('wraps Header in backgroundWrapper div', () => {
    render(<HomeLayout />)

    const headerWrapper = screen.getByTestId('mock-header').parentElement

    expect(headerWrapper).toHaveClass(styles.backgroundWrapper)
  })
})
