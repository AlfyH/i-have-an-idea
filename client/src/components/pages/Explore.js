import React, { Component } from 'react';
import {Row,Col}from 'reactstrap'

class Explore extends Component {

  render() {
    return (
  <Col>
      <Row>
      <a href={"/category?_cat=" + "exhibition"}>exhibition</a>
      </Row>
      <Row>
      <a href={"/category?_cat=" + "play"}>play</a>
      </Row>
  </Col>
    );
  }

}

export default Explore;
