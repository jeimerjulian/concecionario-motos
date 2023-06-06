import {React, useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useParams, json} from "react-router-dom";
import { Moto } from "../store/moto";
import './table.css';

const Actualizando = () => {
  const id = useParams("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();
    useEffect(() => {
        dispatch(
          Moto({
            url: "/",
            method: "GET",
            onSuccess: "moto/buscar"
          })
        );
    }, [dispatch]);

    const routeChangeAdd = () =>{ 
        let path = `/moto/agregar`; 
        navigate(path);
      }

      const routeChangeSearch = () =>{ 
        let path = `/moto/buscar`; 
        navigate(path);
      }

  const saveMoto = useSelector((state) => state.moto.moto.saveMoto);

  const Update = (id, moto, marca, modelanio) => {
    let mMoto = document.getElementById("moto").value;
    let mMarca = document.getElementById("marca").value;
    let mModelanio = document.getElementById("modelanio").value;
    if(mMoto == ""){
      mMoto = moto;
    } 
    if(mMarca == ""){
      mMarca = marca;
    } 
    if(mModelanio == ""){
      mModelanio = modelanio;
    }
    dispatch(
      Moto({
        url: "/",
        method: "PUT",
        data: {
             "id" : id,
             "moto" : mMoto,
             "marca" : mMarca,
             "modelanio" : mModelanio
        },
        onSuccess: "moto/actualizar/:id"
      })
    );
    navigate("../../moto/actualizadaOk")
  }
  console.log(id.id);
   return (
     <div className="Actualizando">
          <h1 align="center"><b>Actualizar Moto</b></h1>
          <div className="container">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Placa</th>
                <th>Moto</th>
                <th>Marca</th>
                <th>Modelo Año</th>
                <th colSpan="1">Accion</th>
              </tr>
            </thead>
            <tbody>
              {saveMoto !== undefined ? saveMoto.map((moto) => (
                  moto.id == id.id ? 
                  <tr>
                    <td>{moto.id}</td>
                    <td>{moto.placa}</td>
                    <td><input type="text" id="moto" name="moto" placeholder={moto.moto}/></td>
                    <td><input type="text" id="marca" name="marca" placeholder={moto.marca}/></td>
                    <td><input type="text" id="modelanio" name="modelanio" placeholder={moto.modelanio}/></td>
                    <td><button onClick={()=>Update(moto.id, moto.moto, moto.marca, moto.modelanio)}>Actualizar</button></td>
                  </tr> : ""
              )) : <tr></tr>}
            </tbody>
          </table>
      </div>
      </div>
  );
};



export default Actualizando;