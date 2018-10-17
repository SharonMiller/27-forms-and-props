'use strict';

import React from 'react';
import superagent from 'superagent';

import Search from './reddit/search';
import ResultsDetail from './reddit/detail';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };

    this.searchReddit = this.searchReddit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  searchReddit(search, limit) {
    let url = `https://www.reddit.com/r/${search}.json?limit=${limit}`;

    return this.fetchData(url)
      .then(posts => {
        this.setState({
          results: posts.data.children
        });
      })
      .catch(console.error);
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
        <Search searchMethod={this.searchReddit} />
        <ResultsDetail results={this.state.results} />

      </main>
    );
  }

}
export default App;

