import React from 'react';


export default class EditForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        
    return (
        <div className="form">

            <form >
                <h2>EDITAR USUARIO</h2>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Nombre"
                    onChange={this.props.handleInputEdit}
                    value={this.props.user.name}  
                />
                <input 
                    name="lastname" 
                    type="text" 
                    placeholder="Apellidos"  
                    onChange={this.props.handleInputEdit}
                    value={this.props.user.lastname}
                />
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email"   
                    onChange={this.props.handleInputEdit}
                    value={this.props.user.email}
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Contraseña"  
                    onChange={this.props.handleInputEdit}
                    value={this.props.user.password}
                />
                <input 
                    type="submit" 
                    value="Actualizar usuario" 
                    className="btn-form"
                    onClick={this.props.actualizarUsuario}
                />
            </form>
        </div>
    )
    }
    
}
