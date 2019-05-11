import React, {Component} from 'react';
import '../styles/App.css';
import firebase from '../firebase/firebase';

class App extends Component {
  constructor(){
    super();
    this.state={
      email: '',
      password : '',
      title:'',
      description:''
    };
  }

componentDidMount(){
  fetch('/feed', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
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

signOut = () => {
  // Sign out of Firebase.
  firebase.auth().signOut();
}

titleIdea = (e) => {
  let title = e.target.value;
  this.setState({title});
}

descriptionIdea = (e) => {
  let description = e.target.value;
  this.setState({description});
}

saveMessage =(messageText) => {
  //Add a new message entry to the Firebase database.
  return firebase.firestore().collection('messages').add({
    name: this.state.title,
    text: this.state.description,
  }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });
}

render(){
  return (
    <div className="App">
    <p>Username: <input onChange = {(e)=>this.emailOn(e)} type="text" name="name" /></p>
    <p>Password: <input onChange = {(e)=>this.passwordOn(e)} type="text" name="name" /></p>
   <p><button onClick = {(e)=>this.login(e)}>Sign In</button>
   <button>Sign Out</button></p>
      <header>
        Welcome to "I have an idea"
      </header>
       <p>Title: <input onChange = {(e)=>this.titleIdea(e)} type="text" name="name" /></p>
       <p>Description: <input onChange = {(e)=>this.descriptionIdea(e)} type="text" name="name" /></p>
       <p>Idea type: <input type="text" name="name" /></p>
      <p> <button>Add Image</button></p>
      <p><button>Add Video</button></p>
      <p><button onClick = {(e)=>this.saveMessage()}>Submit Idea</button></p>
    </div>
  );
}
}
export default App;
