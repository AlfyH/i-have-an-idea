import React, { Component } from 'react';

class Submit extends Component {

  constructor(){
    super();
    this.state={
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

  render() {
    return (
      <div>

        <header>
          Welcome to "I have an idea"
        </header>
         <p>Title: <input onChange = {(e)=>this.titleIdea(e)} type="text" name="name" /></p>
         <p>Description: <input onChange = {(e)=>this.descriptionIdea(e)} type="text" name="name" /></p>
         <p>Idea type: <input type="text" name="name" /></p>
        <p> <button>Add Image</button></p>
        <p><button>Add Video</button></p>
        <p><button>Submit Idea</button></p>
      </div>
    );
  }
}

export default Submit;
