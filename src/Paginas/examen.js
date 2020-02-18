import React from 'react'
import {MDBCol, MDBRow, MDBContainer, MDBBtn, MDBInput} from 'mdbreact'
import { Link } from 'react-router-dom'
class examen1 extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state={
            consecutivo:'1',
      
            nombre:'',
            apellidoP:'',
            apellidoM:'',
            edad:'',
            fecha:'',
            correo:'',
            Lista:[],
        
      }
    }
    handleChange = e => {
        console.log(this.state)
        this.setState({
             ...this.state,
            [e.target.name]: e.target.value,
         
        });
      };

    
        
      handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.edad)
        const valor = parseInt(this.state.edad)
        const n1 = parseInt(this.state.consecutivo)+1
        this.setState({consecutivo: n1})

        if (valor < 35) {
            const T1 = this.state.nombre.charAt(0)+this.state.nombre.charAt(1)+this.state.apellidoP.charAt(0)+this.state.apellidoM.charAt(0)+n1
            console.log(T1)
            this.setState({Lista: [...this.state.Lista, T1]})
        
        } else {
            const T2= this.state.nombre+this.state.apellidoP.charAt(0)+this.state.apellidoM.charAt(0)+n1
            console.log(T2)
            this.setState({Lista: [...this.state.Lista, T2]})
        }
      }

      handleClick = e =>{
          e.preventDefault()
         
      }

    render(){
        return(
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <h1>ExEMEN AQUI</h1><Link to='/'><MDBBtn gradient="blue">Home</MDBBtn></Link>
                    </MDBRow>
                    <MDBRow>
                    <MDBCol size='6'>
                        <form onSubmit={this.handleSubmit}>
                            <MDBRow>
                                <MDBInput 
                                    name="nombre" 
                                    label="Nombre completo" 
                                    onChange={this.handleChange} 
                                    required  
                                />
                            </MDBRow>
                            <MDBRow>
                                <MDBInput 
                                    name="apellidoP" 
                                    label="Apellido Paterno" 
                                    onChange={this.handleChange} 
                                    required  
                                />
                            </MDBRow>
                            <MDBRow>
                                <MDBInput 
                                    name="apellidoM" 
                                    label="Apellido Materno" 
                                    onChange={this.handleChange} 
                                    required  
                                />
                            </MDBRow>
                            <MDBRow>
                                <MDBInput 
                                    type="number"
                                    maxLength="2"
                                    name="edad" 
                                    label="Edad" 
                                    onChange={this.handleChange} 
                                    required  
                                
                                />
                            </MDBRow>
                            <MDBRow>
                                <MDBInput 
                                    type="date"
                                    name="fecha" 
                                    label="Fecha de Nacimiento" 
                                    onChange={this.handleChange} 
                                    required  
                                
                                />
                            </MDBRow>
                            <MDBRow>
                                <MDBInput 
                                    type="email"
                                    name="correo" 
                                    label="Correo" 
                                    onChange={this.handleChange} 
                                    required  
                                
                                />
                            </MDBRow>
                            <MDBRow>
                                <MDBBtn type='submit' gradient="peach">Siguiente</MDBBtn>
                                <MDBBtn gradient="purple">Cacelar</MDBBtn>
                            </MDBRow>
                        </form>
                    </MDBCol>
                    <MDBCol size='6'>
                        <MDBRow>
                            <ul>
                                {this.state.Lista.map(task => <li key={task.id}>
                                    <MDBBtn gradient="aqua">{task}</MDBBtn></li>)}
                            </ul>
                        </MDBRow> 
                    </MDBCol>        
                </MDBRow>      
            </MDBContainer>
        </React.Fragment>
        )
    }
}

export default examen1