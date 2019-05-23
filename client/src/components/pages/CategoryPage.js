import React, { Component } from 'react';
import queryString from 'query-string';
import Tickets from '../Tickets'

class CategoryPage extends Component {

  constructor(){
    super();
    this.state={
      entries: [{
        title: '',
        description: ''
      }]
    };
  }

  componentDidMount(){

  let params = queryString.parse(this.props.location.search)

    fetch(`/getcategory/${params._cat}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
    .then(data => {
      this.setState({
        entries: data
      });

    })

  }


  render() {
    let params = queryString.parse(this.props.location.search)

    let dummyTickets = this.state.entries.map((x,id) => {
      return <Tickets entries = {x} key={id} />
    });

    return (
      <div>
      <h1 className="text-center my-5">{params._cat.toUpperCase()}</h1>
      {dummyTickets}
      </div>
    );
  }

}

export default CategoryPage;
