import React, { Component } from 'react';
import styles from './Filter.module.css';
import filter from '../../icons/filter.svg';
import refresh from '../../icons/refresh.svg';
export default class Filter extends Component {
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
      document.getElementById('FilterExtended').style = 'display:flex';
    }
    else {
      document.getElementById('FilterExtended').style = 'display:none';
    }
  }

  render() {
    return (
      <div className={styles._}>
        <div className={styles.Number}>
          <input type="text" className={styles.NumberInput} placeholder="Номер заказа или ФИО" size="29" />
        </div>
        <button className={styles.Button} id="filter_button" onClick={this.handleClick}>
          <img src={filter} alt="filter" width="13px" height="13px" />
              Фильтры
        </button>
        <div className={styles.Loading}>
          <img src={refresh} className={styles.Loading_Name} alt="refresh" width="16px" height="16px" />
          <div className={styles.Loading_Refresh}>Загрузка
           </div>
         </div>
      </div>
    );
  }
}
