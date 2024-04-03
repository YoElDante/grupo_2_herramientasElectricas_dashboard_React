import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="">
    <img src="./src/assets/Banner_Horizontal_ElectroTools-FondoTransparente.png" alt="Banner ElectroTools horizontal"/>
    <nav>
      <ul className="header__icons" type="none">

        <li>
          <i className="fa-solid fa-bell"></i>
          <p className="notificactionsBubble">6</p>
        </li>

        <li>
          <i className="fa-solid fa-envelope"></i>
          <p className="notificactionsBubble">20</p>
        </li>

        <li className="welcomeMessage">Bienvenido</li>
      </ul>
    </nav>

  </header>
  )
}

export default Header