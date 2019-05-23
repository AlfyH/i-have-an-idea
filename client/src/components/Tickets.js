import React, { Component } from 'react';
import {  Row,Col, Card, CardText, CardBody, CardTitle, CardImg} from 'reactstrap';
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
      {this.props.entries.url && <CardImg className="ticketImage" top width="100%" src={this.props.entries.url} alt="thumbnail" />}
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
