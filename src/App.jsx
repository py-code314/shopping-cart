import { Outlet, NavLink } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Home from './components/home/Home'
import { useState } from 'react'

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
        <Header onClick={handleClick} onHomeClick={handleHomeClick} />
      )}

      <Outlet />
      <footer className="footer">I am a footer</footer>
    </div>
  )
}

export default App
