import React, { Component } from 'react'
import Registerd from './component/Registerd'
import Greet from './component/Greet'
import './App.css'
export class app extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isregisterd:false,
      name:null,
      email:null,
      password:null,
    }
  }
  Registrationhandler = (event)=>{
    // const name = event.target.name.value;
    // const email = event.target.email.value;
    // const password = event.target.password.value;
    // console.log(name,email,password);
    const rawData = new FormData(event.target);
    const objData = Object.fromEntries(rawData);
    const {name,email,password} = objData; 
    this.setState({name, email, password, isregisterd : true});

    event.preventDefault();

  };

  
  render() {
    return (
      <div>{this.state.isregisterd ? (
      <Greet name={this.state.name} email={this.state.email}></Greet>) :( <Registerd Submit={this.Registrationhandler}></Registerd>)  }</div>
    )
  }
}

export default app
