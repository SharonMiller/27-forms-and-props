'use strict';

import React from 'react';


class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      limit: 1,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMethod(this.state.search, this.state.limit);
  }

  handleSearch(e) {
    // let search = e.target.value;
    // this.setState({ search });
    this.setState({ search: e.target.value });
  }

  handleLimit(e) {
    // let limit = e.target.value;
    // this.setState({ limit });
    this.setState({ limit: e.target.value });
  }
  render() {
    return (
      <div className="redditSearch">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch} value={this.state.search} placeholder="Search..." />
          <input onChange={this.handleLimit} value={this.state.limit} type="number" min="0" max="100" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
export default Search;