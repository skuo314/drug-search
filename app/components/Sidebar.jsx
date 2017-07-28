import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar';

const SideBar = () => {
  return (
    <div className='sidebar-main'>
      <SearchBar />
    </div>
  );
};

export default SideBar;