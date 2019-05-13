import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Tickets extends Component {



  componentDidMount(){

  }

  render() {
    return (
      <Container>
      <Row className="ticketTitle">
      <p>Title:{this.props.entries.title}</p>
      </Row>
      <Row className="ticketDescription">
      <p>Description{this.props.entries.description}</p>
      </Row>
      </Container>
    );
  }

}

export default Tickets;
