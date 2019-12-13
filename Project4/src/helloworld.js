import React from 'react';
import ReactDOM from 'react-dom';

export class Search extends React.Component {
  render() {
    return (
      <div id='search-text'> Search</div>
    )
  }
}

ReactDOM.render(
  <Search></Search>,
  document.getElementById("root")
)

