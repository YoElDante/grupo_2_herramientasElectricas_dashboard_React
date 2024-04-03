import React from 'react'
import { useState, useEffect } from "react";
import './LastUser.css'
import defaultUserImg from '../../../../../assets/default.jpg'

const LastUser = () => {

  const [lastUser, setLastUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('http://localhost:3000/api/users');
        const data = await res.json();

        let dataLastPage = await fetch('http://localhost:3000/api/users' + '?page=' + data.info.pages)
        dataLastPage = await dataLastPage.json();

        let lastUserId = dataLastPage.results[dataLastPage.results.length - 1].id;

        let lastUserDetail = await fetch('http://localhost:3000/api/users/' + lastUserId)
        lastUserDetail = await lastUserDetail.json()

        setLastUser(lastUserDetail.results);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);


  return (
    <article className="lastRegister">
      <h3>Último Usuario Registrado</h3>
      <div className="lastRegister__main">
        {lastUser && (
          <>
            <img src={'http://localhost:3000' + lastUser.avatar || defaultUserImg} alt="foto de perfil" />
            <div className="lastRegister__main__data">
              <h4>Username: {lastUser.username}</h4>
              <ul type="none">
                <li>id: {lastUser.id}</li>
                <li>Nombre: {lastUser.firstname} {lastUser.surname}</li>
                <li>Email: <a href={"mailto:" + lastUser.email}>{lastUser.email}</a></li>
                <li>Telefono: {lastUser.phone}</li>
                <li>Locación: {lastUser.city} - {lastUser.country}</li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="buttons">
        {lastUser && (
          <>
            <a href={"localhost:3000/users/profile/" + lastUser.id} title="Ir a Datos Personales">
              <button className="button-change">Cambiar Datos</button>
            </a>
            <form action={"localhost3000:users/delete/" + lastUser.id + "?_method=delete"} method="post">
              <button type="submit" className="button-change deleteAccount">Borrar Cuenta</button>
            </form>
          </>
        )}
      </div>
    </article>
  )
}

export default LastUser