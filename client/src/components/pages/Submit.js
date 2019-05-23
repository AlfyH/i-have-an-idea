import React, { Component } from 'react';
import { post } from 'axios';

// import FileUpload from '../FileUpload'

class Submit extends Component {

  constructor(props){
    super(props);
    this.state={
      title:'',
      description:'',
      type:'',
      file:null
    };
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload = (file) => {
    const url = '/upload';
    const formData = new FormData();
    formData.append('recfile',file)
    formData.append('title', this.state.title)
    formData.append('description', this.state.description)
    formData.append('type', this.state.type)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
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

  onSubmit = (e,title,description,type) => {
    e.preventDefault();
    this.fileUpload(this.state.file).then((response)=>{
      window.location.replace("/");
    });
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
        <form>
         <p>Title: <input onChange = {(e)=>this.titleIdea(e)} type="text" name="name" /></p>
         <p>Description: <input onChange = {(e)=>this.descriptionIdea(e)} type="text" name="name" /></p>
         <p>Idea type: <input onChange = {(e)=>this.typeIdea(e)} type="text" name="name" /></p>
         <input type="file" onChange={this.onChange} />
        <p><button className="mt-5" onClick ={(e)=>this.onSubmit(e, this.state.title,this.state.description,this.state.type)}>Submit Idea</button></p>
        </form>
      </div>
    );
  }
}

export default Submit;
