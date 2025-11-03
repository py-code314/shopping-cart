import { Outlet, NavLink } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Home from './components/home/Home'
import { useState } from 'react'
import Footer from './components/footer/Footer'

// TODO: Style header and nav bar

function App() {
  const [showHero, setShowHero] = useState(true)

  function handleClick() {
    // console.log('link clicked')
    setShowHero(false)
  }

  function handleHomeClick() {
    // console.log('home clicked')
    setShowHero(true)
  }
  return (
    <div className="page">
      {showHero ? (
        <div className="backgroundWrapper">
          <Header onClick={handleClick} onHomeClick={handleHomeClick} />
          <Hero />
        </div>
      ) : (
        <div className="backgroundColor">
          <Header
            onClick={handleClick}
            onHomeClick={handleHomeClick}
          />
        </div>
      )}

      <Outlet />
      <Footer />
    </div>
  )
}

export default App
