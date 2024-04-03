import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (

    <nav className="sidebar">
      <h1><b>DASH</b>BOARD</h1>
      <ul type="none">
        <li>
          <a href="http://localhost:3000/api/users"><i className="fa-solid fa-user"></i>Lista de Usuarios</a>
        </li>
        <li>
          <a href="http://localhost:3000/api/products"><i className="fa-solid fa-box"></i>Lista de Productos</a>
        </li>
        <li>
          <a href=""><i className="fa-solid fa-cart-shopping"></i>Lista de Ordenes</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar