import { Outlet, NavLink } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
// import { useState } from 'react'

// TODO: Style header and nav bar

function App() {
  // const [showHero, setShowHero] = useState(false)
  return (
    <div className="page">
      <div className="backgroundWrapper">
        <Header />
        <Hero/>
      </div>
      <Outlet />
      <footer className="footer">I am a footer</footer>
    </div>
  )
}

export default App
