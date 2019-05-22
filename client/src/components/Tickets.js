import React, { Component } from 'react';
import { Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardLink} from 'reactstrap';
import Divider from './Divider'

class Tickets extends Component {


  render() {
    console.log(this.props.entries._id)
    return (
      <Row className="mx-2">
      <Col>
      <a href={"/detail?_id=" + this.props.entries._id} className="custom-card">
      <Card className="ticketCont">
      <CardBody>
      <CardTitle className="ticketTitle">{this.props.entries.title}</CardTitle>
      <CardText className="ticketDescription">{this.props.entries.description}</CardText>
      </CardBody>
      </Card>
        <Divider />
        </a>
      </Col>

      </Row>
    );
  }

}

export default Tickets;
