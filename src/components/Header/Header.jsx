import React, { Component } from 'react';
import styles from './Header.module.css';
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
      document.getElementById('Page').style = 'background: #fffefe';
      document.getElementById('ThemeName').textContent = 'Светлая тема';
    }
    else {
      document.getElementById('Page').style = 'background: black';
      document.getElementById('ThemeName').textContent = 'Темная тема';
    }
  }

  render() {
    return (
      <div className={styles._}>
        <div className={styles.Title}>Список заказов</div>
        <div className={styles.Theme}>
          <img src={Sun} alt="sun" width="15px" height="15px" className={styles.ThemePicture} />
          <div className={styles.ThemeName} id="ThemeName" onClick={this.handleClick}>
            Светлая тема
             </div>
        </div>
      </div>
    );
  }
}