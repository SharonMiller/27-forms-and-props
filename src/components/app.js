'use strict';
//TODO IMPORT REDDIT COMPONANTS}

import React from 'react';
import superagent from 'superagent';


const redditAPI = 'https://www.reddit.com/r/';

// results.body.data.children[0]

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redditResult: {},
    }

    this.searchReddit = this.searchReddit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  searchReddit(searchFormBoard, searchFormLimit) {
    let url = `${redditAPI}${searchFormBoard}.json?=${searchFormLimit}`;

    return this.fetchData(url)
      .then(redditResult => {
        this.setState({ redditResult });
      });

  }
  fetchData(url) {
    return superagent.get(url)
      .then(result => {
        return result.body;
      })
      .catch(console.error);
  }
  render() {
    return (
      <main>
        {/* <RedditSearch searchMethod={this.searchReddit} />
        <RedditResultDetail redditResult={this.state.redditResult} /> */}

      </main>
    );
  }

}
// function searchReddit(searchFormBoard, searchFormLimit) {
//   let url = `${redditAPI}${searchFormBoard}.json?=${searchFormLimit}`
//   console.log(url('tech', 10));
// }