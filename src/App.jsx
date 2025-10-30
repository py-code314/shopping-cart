import { Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <div className='page'>
      <header className='header'>
        {/* <img className='logo' src="" alt="" /> */}
        <h1 className='title'>Shopping Cart Project</h1>
        <nav className='navbar'>
          <ul className='navbar__list'>
            <li className='navbar__item'>Home</li>
            <li className='navbar__item'>Shop</li>
            <li className='navbar__item'>Cart</li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className='footer'>I am a footer</footer>
    </div>
  )
}

export default App
