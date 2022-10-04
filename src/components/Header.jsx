import '../assets/Styles/Header.css'
import logo from '../assets/Images/sistema-solar.png'

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img src={logo} />
          Constellation.Code
        </div>
        <ul className="menu">
          <li>
            <a href="#section-1">Inicio</a>
          </li>
          <li>
            <a href="#section-3">Galeria</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
