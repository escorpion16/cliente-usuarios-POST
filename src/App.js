import React from 'react';
import Formulario from "./component/formulario";
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
        users: []
    }
}

  componentDidMount(){
    this.obtenerUsuarios();
  }
  
  obtenerUsuarios = () => {
    let url = 'https://academlo-api-users.herokuapp.com/users'
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({users: resultado.data}))
    .catch(error => console.log(error))
  }

  eliminarUsuarios = (event, id) => {
    event.preventDefault();
    let url = 'https://academlo-api-users.herokuapp.com/user'
    fetch(url)
    .then(response => response.json())
    .then(myJson => console.log(myJson))
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
        
        <Formulario usersData={this.state.users} obtenerUsuariosFn={this.obtenerUsuarios} eliminarUsuariosFn={this.eliminarUsuarios}/>
  
      </div>
    );
  }
  
}

export default App;
