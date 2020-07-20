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
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
    }

    handleInput = (event) => {
        
        this.setState({[event.target.name]: event.target.value})
    };

    render(){
        return (
        <div>
            <div>
                <div className="containerForm">
                    <form onInput={this.handleInput} onSubmit={this.addUser.bind(this)}>
                        <input name="name" type="text" placeholder="nombre"/>
                        <input name="lastname" type="text" placeholder="apellido"/>
                        <input name="email" type="text" placeholder="email"/>
                        <input name="password"  type="password" placeholder="contraseña"/>
                        <input value="Enviar Datos" type="submit" />
                    </form>
                </div>
                
                {this.props.usersData.map((dato) => {
                    return (
                        <div className="containerCard">
                            <div >
                                <div >
                                    <h2>{dato.name}</h2>
                                    <h2>{dato.lastname}</h2>
                                    <h4>{dato.email}</h4>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>);
    }
}

export default Formulario;