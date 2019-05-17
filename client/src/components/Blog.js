import React, { Component } from 'react';
import { Container, Row,Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardLink} from 'reactstrap';

class Blog extends Component {

  render() {

    return (
      <Row className="mx-5 mt-5">
        <Col>
          <Card className="px-5 py-5">
      <CardTitle className="blogTitle">{this.props.entries.title.replace(/]]>$/, '').replace(/^<!\[CDATA\[/, '')}</CardTitle>
      <CardSubtitle className="blogSubtitle">{this.props.entries.creator.replace(/]]>$/, '').replace(/^<!\[CDATA\[/, '')}</CardSubtitle>
      <CardSubtitle className="blogSubtitle">{this.props.entries.pubDate.replace(/]]>$/, '')}</CardSubtitle>
        <CardBody>
      <CardText className="blogContent" dangerouslySetInnerHTML={{__html:this.props.entries.encoded.replace(/]]>$/, '')}}/>
        </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

}

export default Blog;
