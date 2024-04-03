import React from 'react'
import { useState, useEffect } from "react";
import './LastUser.css'
import defaultProductImg from '../../../../../assets/defaultProduct.webp'

const LastProduct = () => {

  const [lastProduct, setLastProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataProduct = async () => {
      try {
        setIsLoading(true);

        const res = await fetch('http://localhost:3000/api/Products');
        const data = await res.json();

        let lastProductId = data.results[data.results.length - 1].id;

        let lastProductDetail = await fetch('http://localhost:3000/api/Products/' + lastProductId)
        lastProductDetail = await lastProductDetail.json()

        setLastProduct(lastProductDetail.results);
        
        setError(null);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getDataProduct();
  }, []);


  return (
    <article className="lastRegister">
      <h3>Último Producto Ingresado</h3>
      <div className="lastRegister__main">
        {lastProduct && (
          <>
            <img src={lastProduct && lastProduct.images && lastProduct.images.length > 0 ? 'http://localhost:3000' + lastProduct.images[0] : defaultProductImg} alt="principal del producto" />

            <div className="lastRegister__main__data">
              <h4>Productname: {lastProduct.name || "cargando..."}</h4>
              <ul type="none">
                <li>id: {lastProduct.id}</li>
                <li>brand: {lastProduct.brand}</li>
                <li>modelo: {lastProduct.model}</li>
                <li>descripción: {lastProduct.description}</li>
                <hr />
                <li>unidades en stock: {lastProduct.units}</li>
                <li>Precio por unidad: ${lastProduct.price}</li>
                <hr />
                <li>Link a Manual: <a href={"" + lastProduct.manual}>{lastProduct.manual}</a></li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="buttons">
        {lastProduct && (
          <>
            <a href={"localhost:3000/Products/profile/" + lastProduct.id} title="Ir a Datos Personales">
              <button className="button-change">Cambiar Datos</button>
            </a>
            <form action={"localhost3000:Products/delete/" + lastProduct.id + "?_method=delete"} method="post">
              <button type="submit" className="button-change deleteAccount">Borrar Producto</button>
            </form>
          </>
        )}
      </div>
    </article>
  )
}

export default LastProduct