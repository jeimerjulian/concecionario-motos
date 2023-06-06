import {React, useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useParams, json} from "react-router-dom";
import { Moto } from "../store/moto";
import './table.css';


const Buscando = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routeChange = (id) =>{ 
    let path = `/moto/actualizar/`+id; 
    navigate(path);
  }

    useEffect(() => {
        dispatch(
          Moto({
            url: "/",
            method: "GET",
            onSuccess: "moto/buscar"
          })
        );
    }, [dispatch]);

  const saveMoto = useSelector((state) => state.moto.moto.saveMoto);

  const Delete = (placa) => {
    dispatch(
      Moto({
        url: "/",
        method: "DELETE",
        data: {
          "placa": placa
        },
        onSuccess: "moto/buscar"
      })
    );
    navigate("../../moto/eliminadaOk")
  }

   return (
     <div className="Buscando">
          <h1 align="center"><b>Motos</b></h1>
          <div className="container">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Moto</th>
                <th>Placa</th>
                <th>Marca</th>
                <th>Modelo Año</th>
                <th colSpan="2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {saveMoto !== undefined ? saveMoto.map((moto) => (
                  <tr>
                    <td>{moto.id}</td>
                    <td>{moto.moto}</td>
                    <td>{moto.placa}</td>
                    <td>{moto.marca}</td>
                    <td>{moto.modelanio}</td>
                    <td><button onClick={()=>routeChange(moto.id)}>Actualizar</button></td>
                    <td><button onClick={()=>Delete(moto.placa)}>Eliminar</button></td>
                  </tr>
              )) : <tr></tr>}
            </tbody>
          </table>
      </div>
      </div>
  );
};


export default Buscando;
