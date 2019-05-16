import React, { Component } from 'react';

class Blog extends Component {

  render() {
    console.log(this.props.entries)
    return (
      <div>why is entries undefined?!?</div>
    );
  }

}

export default Blog;
