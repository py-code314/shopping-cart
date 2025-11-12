import { render, screen } from '@testing-library/react'
import NavBar from './Navbar'
import { MemoryRouter } from 'react-router'
import styles from './Navbar.module.css'


describe('Navbar component', () => {
  it('renders Navbar', () => {
    
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('links to correct Home and Shop paths', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/home'
    )
    expect(screen.getByRole('link', { name: /shop/i })).toHaveAttribute(
      'href',
      '/shop'
    )
  })

  it('checks for active class when NavLink href matches the current URL', () => {
    render(<MemoryRouter initialEntries={['/home']}>
      <NavBar/>
    </MemoryRouter>)

    const homeLink = screen.getByRole('link', {name: /home/i})

    expect(homeLink).toHaveClass(styles.active)
  })
})