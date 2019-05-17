import React, { Component } from 'react';
import Blog from '../Blog'

class Community extends Component {
  constructor(){
    super()
    this.state = {
      authorMetadata: [] ,
      feedMetadata: [],
      blogContent:[]
    };
  }

  componentDidMount() {
    fetch('/feed', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.body, 'text/xml');
        let podcastArray = Array.from(xml.querySelectorAll('channel'));

        let authorMetadata = {
          title: podcastArray[0].querySelector('title').innerHTML,
          description: podcastArray[0].querySelector('description').innerHTML,
          generator: podcastArray[0].querySelector('generator').innerHTML
        };

        let feedArray = Array.from(xml.querySelectorAll('item'));
        let feedMetadata = feedArray.map((x,id) => {
          return {
            title: x.querySelector('title').innerHTML,
            creator: x.querySelector('creator').innerHTML,
            pubDate: x.querySelector('pubDate').innerHTML,
            link: x.querySelector('link').innerHTML,
            encoded: x.querySelector('encoded').innerHTML
          };

        });
        this.setState({
          authorMetadata,
          feedMetadata
        });
      })
  }

  render() {

    let blogContent = this.state.feedMetadata.map((mediumFeed,id) => {
      return <Blog entries = {mediumFeed} key={id} />
  })
    return (
      <div>
      {blogContent}
      </div>
    );
  }

}

export default Community;
