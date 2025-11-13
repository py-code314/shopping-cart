import { Outlet } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Footer from './components/footer/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="page">
      <Outlet context={[cartItems, setCartItems]} />

      <Footer />
    </div>
  )
}

export default App
