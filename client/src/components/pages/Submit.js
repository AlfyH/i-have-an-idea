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
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  titleIdea = (e) => {
        let title = e.target.value;
        this.setState({title});
      }

      descriptionIdea = (e) => {
        let description = e.target.value;
        this.setState({description});
      }

      ideaType = (e) => {
            let type = e.target.value;
            this.setState({type});
            console.log(type);
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
         <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Idea Type
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        <FileUpload />
        <p><button>Add Video</button></p>
        <p><button onClick ={(e)=>this.onSubmit(this.state.title,this.state.description)}>Submit Idea</button></p>
      </div>
    );
  }
}

export default Submit;
