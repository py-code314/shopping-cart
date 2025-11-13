import { render, screen } from '@testing-library/react'
// import { MemoryRouter } from "react-router-dom";
import Footer from './Footer'

describe('Footer component', () => {
  it('renders Footer', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correct heading (h2)', () => {
    const { getByRole } = render(<Footer />)
    const heading = getByRole('heading', { name: /anchor/i, level: 2 })

    expect(heading).toBeInTheDocument()
  })

  it('renders three subheadings', () => {
    render(<Footer />)

    const subHeadings = screen.getAllByRole('heading', { level: 3 })
    // const footerLists = screen.getAllByRole('list')

    expect(subHeadings).toHaveLength(3)

    expect(
      screen.getByRole('heading', { name: /customer service/i, level: 3 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /stores & services/i, level: 3 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i, level: 3 })
    ).toBeInTheDocument()
    // expect(footerLists).toHaveLength(3)
  })

  it('renders four lists', () => {
    render(<Footer />)

    const footerLists = screen.getAllByRole('list')

    expect(footerLists).toHaveLength(4)
  })

  it('opens external links with correct attributes', () => {
    render(<Footer />)
    
    const facebook = screen.getByRole('link', { name: /facebook/i })
    const mastodon = screen.getByRole('link', { name: /mastodon/i })
    const instagram = screen.getByRole('link', { name: /instagram/i })
    const pinterest = screen.getByRole('link', { name: /pinterest/i })
    
    expect(facebook).toHaveAttribute('href', 'https://www.facebook.com')
    expect(facebook).toHaveAttribute('target', '_blank')
    expect(facebook).toHaveAttribute('rel', 'noopener noreferrer')

    expect(mastodon).toHaveAttribute('href', 'https://mastodon.social/explore')
    expect(mastodon).toHaveAttribute('target', '_blank')
    expect(mastodon).toHaveAttribute('rel', 'noopener noreferrer')

    expect(instagram).toHaveAttribute('href', 'https://instagram.com')
    expect(instagram).toHaveAttribute('target', '_blank')
    expect(instagram).toHaveAttribute('rel', 'noopener noreferrer')

    expect(pinterest).toHaveAttribute('href', 'https://pinterest.com')
    expect(pinterest).toHaveAttribute('target', '_blank')
    expect(pinterest).toHaveAttribute('rel', 'noopener noreferrer')

  })
})
