import React, { Component } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import FileUpload from '../FileUpload'

class Submit extends Component {

  constructor(props){
    super(props);
    this.state={
      title:'',
      description:'',
      type:''
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

      typeIdea = (e) => {
            let type = e.target.value;
            this.setState({type});
          }

  onSubmit = (title,description,type) => {
    const sendData = {
        title,
        description,
        type
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
      <div className="text-center">
        <h1 className="mt-5 mb-3">
          Welcome to "I have an idea"
        </h1>
         <p>Title: <input onChange = {(e)=>this.titleIdea(e)} type="text" name="name" /></p>
         <p>Description: <input onChange = {(e)=>this.descriptionIdea(e)} type="text" name="name" /></p>
         <p>Idea type: <input onChange = {(e)=>this.typeIdea(e)} type="text" name="name" /></p>
        <FileUpload />
        <p><button className="mt-5" onClick ={(e)=>this.onSubmit(this.state.title,this.state.description,this.state.type)}>Submit Idea</button></p>
      </div>
    );
  }
}

export default Submit;
