import { Outlet, NavLink } from 'react-router'
import './App.css'
import Header from './components/header/Header'

// TODO: Style header and nav bar

function App() {
  return (
    <div className="page">
      <Header/>
      <Outlet />
      <footer className="footer">I am a footer</footer>
    </div>
  )
}

export default App
