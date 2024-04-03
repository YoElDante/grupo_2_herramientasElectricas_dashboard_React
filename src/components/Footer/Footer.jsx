import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>  

    <article className="identidad">
      <a href="#" title="Ir a la pág. principal">
        <img className="logo" src="./src/assets/LogoAmarillo-LetrasBlancas-FondoTransparente.png"
          alt="logo ElectroTools"/>
      </a>
    </article>
    <a href="#" className="copyright" title="Ir al sitio web del Team Dinamita Arg"> Team Dinamita Arg ©</a>
  </footer>
  )
}

export default Footer