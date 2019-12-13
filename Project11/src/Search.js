import React from 'react';
import { Run } from './Run';
import logo from './img/logo.png'
export class Search extends React.Component {
  render() {
    return (
      <div>
        <Run></Run>
        <div className='search-text'> Search</div>
        <img src={logo} alt="nothing"/>
      </div>
    )
  }
}



