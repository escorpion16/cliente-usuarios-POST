import React from 'react';
import Formulario from "./component/formulario";
import './App.css';
import Card from "./component/card";
import EditForm from "./component/editForm";



class App extends React.Component {
  constructor(){
    super();

    this.state = {
        users: [],
        userEdited: {
          name:'',
          lastname:'',
          email:'',
          password:''
        } 
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

  editarUsuario = (e) => {

    this.setState({
      userEdited: e
    })
  }
  

  handleInputEdit = (event) => {
    this.setState({
      userEdited: {...this.state.userEdited,[event.target.name]: event.target.value}
    })

  }

  actualizarUsuario = (e) => {
    e.preventDefault();
    const id = this.state.userEdited.id;
    let url = ' https://academlo-api-users.herokuapp.com/user/'+id;
    
    fetch(url,{
      method: 'PUT',
      headers: {'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(
        this.state.userEdited)

    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.obtenerUsuarios();
    })
    .catch(error => console.log(error))
    
  }
  
  render(){
    return (
      <div className="App">
        <div className="containerForms">
          <Formulario usersData={this.state.users} obtenerUsuariosFn={this.obtenerUsuarios} eliminarUsuariosFn={this.eliminarUsuarios}/>
          <EditForm 
            actualizarUsuario={this.actualizarUsuario}
            user={this.state.userEdited}
            handleInputEdit={this.handleInputEdit}
          />
        </div>
        
        <div className="cardContainer">
          <Card 
            editarUsuario={this.editarUsuario}
            usersData={this.state.users} 
            obtenerUsuariosFn={this.obtenerUsuarios} 
            eliminarUsuariosFn={this.eliminarUsuarios}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
