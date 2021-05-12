import React, { Component } from 'react';
import './Filter.css';
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
      document.getElementsByClassName('FilterExtended')[0].style = 'display:flex';
    }
    else {
      document.getElementsByClassName('FilterExtended')[0].style = 'display:none';
    }
  }

  render() {
    return (
      <div className="Filter">
        <div className="Filter_Order_Number">
          <input type="text" className="Filter_Order_Number-Input" placeholder="Номер заказа или ФИО" size="29" />
        </div>
        <button className="Filter_Button" id="filter_button" onClick={this.handleClick}>
          <img src={filter} alt="filter" width="13px" height="13px" />
              Фильтры
        </button>
        <div className="Filter_Loading">
          <img src={refresh} className="Filter_Loading_Name" alt="refresh" width="16px" height="16px" />
          <div className="Filter_Loading_Refresh">Загрузка
           </div>
         </div>
      </div>
    );
  }
}
