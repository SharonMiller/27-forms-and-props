'use strict'


import React from 'react';

class ResultsDetail extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="redditResults">
        <h1>Search Results</h1>
        <ul>
          {this.props.results.map((post, i) => {
            return (
              <li key={i}>
                <a href={post.data.url}>
                  <h1>{post.data.title}</h1>
                  <p>{post.data.ups}</p>
                </a>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default ResultsDetail;