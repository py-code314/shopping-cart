import { Outlet, NavLink, useLocation } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import { useState } from 'react'
import Footer from './components/footer/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/home'

  return (
    <div className="page">
      {isHome ? (
        <>
          <div className="backgroundWrapper">
            <Header />

            <Hero />
          </div>
        </>
      ) : (
        <>
          <div className="backgroundColor">
            <Header />
          </div>
        </>
      )}

      <Outlet context={[cartItems, setCartItems]} />
      <Footer />
    </div>
  )
}

export default App
