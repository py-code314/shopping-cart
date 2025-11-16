import { render, screen } from '@testing-library/react'
import ChooseUs from './ChooseUs'

/* Test suite */
describe('ChooseUs component', () => {
  it('renders ChooseUs section', () => {
    const { asFragment } = render(<ChooseUs />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correct heading (h2) for section', () => {
    const { getByRole } = render(<ChooseUs />)
    const heading = getByRole('heading', { name: /why choose us/i, level: 2 })

    expect(heading).toBeInTheDocument()
  })

  it('renders all three cards subheadings (h3)', () => {
    render(<ChooseUs />)

    const subHeadings = screen.getAllByRole('heading', { level: 3 })

    expect(subHeadings).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: /luxury items/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /affordable prices/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /many choices/i })
    ).toBeInTheDocument()
  })

  it('renders three More Info elements', () => {
    render(<ChooseUs />)

    const moreInfoElements = screen.getAllByText('More Info')

    expect(moreInfoElements).toHaveLength(3)
  })
})
