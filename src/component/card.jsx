import React from "react";

class Card extends React.Component{
    constructor(){
        super();
        this.state = {}

    }

    deleteUser = (idUser) => {
        //let idUser = event.target.id;
        let url = "https://academlo-api-users.herokuapp.com/user/"+idUser;
        fetch(url,{
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(myJson => this.props.obtenerUsuariosFn())
        .catch(error => console.log(error))
    }

    render(){
        return (
        <div>
            {this.props.usersData.map((dato) => {
                    return (
                        
                        <div key={dato.id} className="card">
                            <h2>{dato.name}</h2>
                            <h2>{dato.lastname}</h2>
                            <h4>{dato.email}</h4>
                            <div className="buttonsCard">
                                <button onClick={() => this.props.editarUsuario(dato)}>Editar</button>
                                <button id={dato.id} onClick={() => this.deleteUser(dato.id)}>Eliminar</button>
                            </div>
                        </div>
                        
                    );
            })}
        </div>);

    }
}

export default Card;