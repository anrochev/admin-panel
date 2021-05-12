import React, { Component } from 'react';
import './Header.css';
import Sun from '../../icons/sun.svg';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    if (this.state.isToggleOn) {
      document.getElementsByClassName('Page')[0].style = 'background: #fffefe';
      document.getElementsByClassName('ThemeName')[0].textContent = 'Светлая тема';
    }
    else {
      document.getElementsByClassName('Page')[0].style = 'background: black';
      document.getElementsByClassName('ThemeName')[0].textContent = 'Темная тема';
    }
  }

  render() {
    return (
      <div className="Header">
        <div className="Title">Список заказов</div>
        <div className="Theme">
          <img src={Sun} alt="sun" width="15px" height="15px" className="ThemePicture" />
          <div className="ThemeName" onClick={this.handleClick}>
            Светлая тема
             </div>
        </div>
      </div>
    );
  }
}