import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

getSortByClass(sortByOption) {
    return (this.state.sortBy == sortByOption) ? "activate" : " ";
}
handleSortByChange(sortByOption) {
  this.setState({sortBy});
}

handleTermChange(e) {
  this.setState({
    term: e.target.value
  });
}

handleLocationChange(e) {
  this.setState({
    location: e.target.value
  });
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
  }


  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
        onClick={handleSortByChange.bind(this,sortByOptionValue)}
         className={getSortByClass(sortByOptionValue)}
         key={sortByOptionValue}>{sortByOption}
       </li>;
    });
  }


  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
