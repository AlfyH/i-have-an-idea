import React, {Component} from 'react';
import '../../styles/App.scss';
import Tickets from '../Tickets'
import Slider from "react-slick";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

render(){

  const dummyTicketsCount = [1,2,3,4,5];

  const carouselSettings = {
     className: "center",
     centerMode: true,
     infinite: true,
     centerPadding: "60px",
     slidesToShow: 3,
     speed: 500
   };
   const squareSettings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 3
    };

    let dummyTickets = dummyTicketsCount.map((x,id) => {
      return <Tickets key={id} />
    });

  return (
    <div className="App">
      <div className="homeBanner"> Join our Slack Channel #Ihaveanidea</div>
      <header>Editor's Pick</header>
      <Slider {...carouselSettings}>
        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
      </Slider>
      <header>Top Favorites</header>
      <Slider {...squareSettings}>
      <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
      </Slider>
      {dummyTickets}
    </div>
  );
}
}
export default Home;
