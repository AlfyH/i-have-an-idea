import React, {Component} from 'react';
import '../../styles/App.scss';
import Tickets from '../Tickets'
import Slider from "react-slick";
import { ParallaxBanner,ParallaxProvider} from 'react-scroll-parallax';
import {Row} from 'reactstrap'

class Home extends Component {
  constructor(props) {
super(props);
this.state = {
  data: {},
  entries: []
};
}

componentDidMount(){
  fetch('/entriesget', {
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
  });
}

render(){
  const carouselSettings = {
     className: "center",
     centerMode: true,
     infinite: true,
     centerPadding: "0px",
     slidesToShow: 3,
     speed: 500
   };
   const squareSettings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 3
    };

    let dummyTickets = this.state.entries.map((x,id) => {
      return <Tickets entries = {x} key={id} />
    });

  return (

    <div className="App">
      <ParallaxProvider>
<Row className="mx-4 mt-5">
    <ParallaxBanner
    className="parallax"
    layers={[
        {
            image: 'https://picsum.photos/id/653/1389/467',
            amount: 0.1,
        }
    ]}
    style={{
        height: '400px',
    }}
><h2 className="parallaxHeader">Join our Slack channel #Ihaveanidea</h2>
</ParallaxBanner>
</Row>
      </ParallaxProvider>


      <h2 className="mt-4 ml-3">Editor's Pick</h2>
      <Slider {...carouselSettings}>
        <div><img src="https://picsum.photos/id/676/654/365"/></div><div><img src="https://picsum.photos/id/677/654/365"/></div><div><img src="https://picsum.photos/id/678/654/365"/></div><div><img src="https://picsum.photos/id/672/654/365"/></div><div><img src="https://picsum.photos/id/672/654/365"/></div>
      </Slider>
      <h2 className="mt-4 ml-3">Top Favorites</h2>
      <Slider {...squareSettings} className="mb-5">
      <div><img src="https://picsum.photos/id/676/340/340"/></div><div><img src="https://picsum.photos/id/677/340/340"/></div><div><img src="https://picsum.photos/id/678/340/340"/></div><div><img src="https://picsum.photos/id/672/340/340"/></div><div><img src="https://picsum.photos/id/672/340/340"/></div>
      </Slider>
      {dummyTickets}
    </div>

  );
}
}
export default Home;
