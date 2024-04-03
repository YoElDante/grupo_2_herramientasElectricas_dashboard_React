import React from 'react'
import './Seccion.css'

const Seccion = ({ icon, concept, Children }) => {
  return (

    <section className="seccion">
      <div className="seccion__title">
        {icon}
        <h2>Sección {concept}</h2>
      </div>
      <fieldset>
        {Children}
      </fieldset>
    </section>

  )
}

export default Seccion