import React, { useState, useEffect } from 'react';
import './ProductsTable.css'; // Asegúrate de tener el archivo CSS para los estilos

const ProductsTable = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/api/Products');
        const data = await response.json();
        setProductos(data.results);

        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="tabla-container">
      <h2>Productos</h2>
      {isLoading && <p>Cargando...</p>}
      {error && <p>Ocurrió un error: {error}</p>}
      {!isLoading && !error && (
        <table className="tabla-productos">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.name}</td>
                <td>{producto.model}</td>
                <td>{producto.brand}</td>
                <td> <a href={"http://localhost:3000/products/detail/" + producto.id} target="_blank" rel="noopener noreferrer">Ir a Detalles</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsTable;