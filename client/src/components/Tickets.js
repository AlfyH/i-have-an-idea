import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Tickets extends Component {

  render() {
    return (
      <Container>
      <Row className="ticketTitle">
      <p>Title:</p>
      </Row>
      <Row className="ticketDescription">
      <p>Description</p>
      </Row>
      </Container>
    );
  }

}

export default Tickets;
