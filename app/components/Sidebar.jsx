import React, { Component } from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar';

class SideBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className='sidebar-main'>
        <SearchBar />
      </div>
    )
  };
};

/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {};
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(SideBar);