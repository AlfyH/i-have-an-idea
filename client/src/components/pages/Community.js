import React, { Component } from 'react';

class Community extends Component {
  constructor(){
    super()
    this.state = {
      authorMetadata: [] ,
      feedMetadata: []
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
    let title = this.state.feedMetadata.length > 0 ? this.state.feedMetadata[1].title.replace(/]]>$/, '').replace(/^<!\[CDATA\[/, '') : null;
    let creator = this.state.feedMetadata.length > 0 ? this.state.feedMetadata[1].creator.replace(/]]>$/, '').replace(/^<!\[CDATA\[/, '') : null;
    let pubDate = this.state.feedMetadata.length > 0 ? this.state.feedMetadata[1].pubDate.replace(/]]>$/, '') : null;
    let body = this.state.feedMetadata.length > 0 ? this.state.feedMetadata[1].encoded.replace(/]]>$/, '').replace(/<\/?p[^>]*>/, 'sfasdfsadf') : null;
    return (
      <div>
      <h1>{title}</h1>
      <h3>{creator}</h3>
      <p>{pubDate}</p>
        <div dangerouslySetInnerHTML={{__html:body}}/>
      </div>
    );
  }

}

export default Community;
