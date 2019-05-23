import React, { Component } from 'react';
import { Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardColumns} from 'reactstrap';
import Divider from './Divider'

class Tickets extends Component {


  render() {
    return (
      <Row className="mx-2 my-2">
      <Col>
      <a href={"/detail?_id=" + this.props.entries._id} className="custom-card">
      <Card className="ticketCont">
      <CardBody>
      <CardTitle className="ticketTitle">{this.props.entries.title}</CardTitle>
      <CardText className="ticketDescription">{this.props.entries.description}</CardText>
      <CardText className="ticketType">{this.props.entries.type}</CardText>
      </CardBody>
      </Card>
        </a>
      </Col>

      </Row>
    );
  }

}

export default Tickets;
