import React from "react";

class Formulario extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    addUser = (event) => {
        event.preventDefault();
        let url = "https://academlo-api-users.herokuapp.com/users";
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{'Content-Type': "application/json; charset=UTF-8"}
        })
        .then(respuesta => respuesta.json())
        .then(resultado => {
            console.log(resultado)
            this.props.obtenerUsuariosFn()
        })
        .catch(error => console.log(error))
    }

    

    handleInput = (event) => {
        
        this.setState({[event.target.name]: event.target.value})
    };

    render(){
        return (
        <div>
            <div>
                <div className="form">
                    <form onInput={this.handleInput} onSubmit={this.addUser.bind(this)}>
                        <h2>REGISTRO</h2>
                        <input name="name" type="text" placeholder="nombre"/>
                        <input name="lastname" type="text" placeholder="apellido"/>
                        <input name="email" type="text" placeholder="email"/>
                        <input name="password"  type="password" placeholder="contraseña"/>
                        <input value="Enviar Datos" type="submit" className="btn-form"/>
                    </form>
                </div>
                
                
            </div>
        </div>);
    }
}

export default Formulario;