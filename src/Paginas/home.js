import React from 'react'
import "../index.css";
import logo from "../logo.png";
import {Link} from 'react-router-dom'
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

class home extends React.Component{

    render(){
        return(
            <MDBContainer>
            <MDBRow center style={{ height: "100vh" }}>
              <MDBCol middle="true" sm="8" className="text-center">
                <img src={logo} alt="logo" style={{ width: "10rem" }} />
                <h1>Manejo del State</h1>
                <p className="mb-2">Framework Material Desing de Bootstrap</p>
                <Link to='/examen'><MDBBtn target="blank" color="light-blue"><strong>Ver Ejercicio</strong></MDBBtn></Link>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )
    }
}

export default home