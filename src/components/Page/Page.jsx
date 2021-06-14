import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import styles from './Page.module.css';
export default class Page extends Component {
  render() {
    return (
      <div className={styles._} id="Page">
         <MainContent/>         
        <Sidebar/>
      </div>
      );
    }
  }
