import { Outlet, NavLink } from 'react-router'
import './App.css'

// TODO: Style header and nav bar

function App() {
  return (
    <div className="page">
      <header className="header">
        {/* <img className='logo' src="" alt="" /> */}
        <h1 className="title">Shopping Cart Project</h1>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink
                to={`home`}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to={`shop`}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                Shop
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to={`cart`}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">I am a footer</footer>
    </div>
  )
}

export default App
