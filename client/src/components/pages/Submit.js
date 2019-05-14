import React, { Component } from 'react';
import FileUpload from '../FileUpload'

class Submit extends Component {

  constructor(){
    super();
    this.state={
      title:'',
      description:''
    };
  }

  titleIdea = (e) => {
        let title = e.target.value;
        this.setState({title});
      }

      descriptionIdea = (e) => {
        let description = e.target.value;
        this.setState({description});
      }


  onSubmit = (title,description) => {
    const sendData = {
        title,
        description
      }

    fetch('/entriespost', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    })
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



  render() {
    return (
      <div>

        <header>
          Welcome to "I have an idea"
        </header>
         <p>Title: <input onChange = {(e)=>this.titleIdea(e)} type="text" name="name" /></p>
         <p>Description: <input onChange = {(e)=>this.descriptionIdea(e)} type="text" name="name" /></p>
         <p>Idea type: <input type="text" name="name" /></p>
        <p><FileUpload /></p>
        <p><button>Add Video</button></p>
        <p><button onClick ={(e)=>this.onSubmit(this.state.title,this.state.description)}>Submit Idea</button></p>
      </div>
    );
  }
}

export default Submit;
