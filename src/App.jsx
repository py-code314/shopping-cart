import { Outlet, NavLink, useLocation } from 'react-router'
import './App.css'
import Header from './components/header/Header'
// import Hero from './components/hero/Hero'
import { useState } from 'react'
import Footer from './components/footer/Footer'
// import Home from './components/home/Home'

function App() {
  const [cartItems, setCartItems] = useState([])

  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/home'

  return (
    <div className="page">
      {isHome ? (
        <>
          <div className="backgroundWrapper">
            <Header isHome={isHome} cartItems={cartItems} />
          </div>
        </>
      ) : (
        <>
          <div className="backgroundColor">
            <Header cartItems={cartItems} />
          </div>
        </>
      )}

      <main>
        <Outlet context={[cartItems, setCartItems]} />
      </main>
      <Footer />
    </div>
  )
}

export default App
