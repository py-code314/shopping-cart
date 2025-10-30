import { Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <div>
      <header>
        {/* <img className='logo' src="" alt="" /> */}
        <h1>Shopping Cart Project</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>I am a footer</footer>
    </div>
  )
}

export default App
