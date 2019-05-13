import React, { Component } from 'react';
import firebase from '../../firebase/firebase';

class Login extends Component {

  constructor(){
    super();
    this.state={
      email: '',
      password : ''
    };
  }

  login = (e) => {
    firebase.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((res) => {
        console.log("user at firebase",res)
    }).catch((e)=>{
        console.log("error",e)
    })
  }
  passwordOn = (e) => {
    let password = e.target.value;
    this.setState({password});
  }
  emailOn = (e) => {
    let email = e.target.value;
    this.setState({email});
  }

  render() {
    return (
      <div>
      <p>Username: <input onChange = {(e)=>this.emailOn(e)} type="text" name="name" /></p>
      <p>Password: <input onChange = {(e)=>this.passwordOn(e)} type="text" name="name" /></p>
     <p><button onClick = {(e)=>this.login(e)}>Sign In</button>
     <button>Sign Out</button></p>
      </div>
    );
  }

}

export default Login;
