import React, { Component } from 'react';
import queryString from 'query-string';

class DetailPage extends Component {

  constructor(){
    super();
    this.state={
      entries: {}
    };
  }


  componentDidMount(){
  let params = queryString.parse(this.props.location.search)
    fetch(`/detailget/${params._id}`, {
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



    return (
      <div>
<h1>{this.state.entries.title}</h1>
<p>{this.state.entries.description}</p>

      </div>
    );
  }

}

export default DetailPage;
