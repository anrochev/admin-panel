import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import './Page.css';
export default class Page extends Component {
  render() {
    return (
      <div className="Page">
         <MainContent/>         
        <Sidebar/>
      </div>
      );
    }
  }
