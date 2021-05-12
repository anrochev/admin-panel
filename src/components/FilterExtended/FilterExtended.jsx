import React, { Component } from 'react';
import './FilterExtended.css';
export default class FilterExtended extends Component {

  render() {
    return (
      <div className="FilterExtended">
        <div className="FilterExtended_Date">
            Дата оформления:<br/>
            <label className="FilterExtended_Date-Begin-Label" htmlFor="FilterExtended_Date-Begin">c </label>
            <input type="date" className="FilterExtended_Date-Begin" id="FilterExtended_Date-Begin"  size="20"/>
            <label className="FilterExtended_Date-Begin-Label" htmlFor="FilterExtended_Date-End"> по </label>    
            <input type="date" className="FilterExtended_Date-End" id="FilterExtended_Date-End" size="20"/>
        </div>
      <div className="FilterExtended_Status">
          Статус заказа:<br/>
          <select name="select" className="Select" size="1" width="20">
              <option value="s1">Новый</option>
              <option value="s2">Расчет</option>
              <option selected value="s3">Подтвержден</option>
              <option value="s4">Отложен</option>
              <option value="s4">Выполнен</option>
              <option value="s4">Отменен</option>
          </select>
      </div>
      <div className="FilterExtended_Sum">
          Сумма заказа:<br/>
          <input type="text" className="FilterExtended_Sum-From" placeholder="с " size="20"/>
          <input type="text" className="FilterExtended_Sum-To" placeholder="по " size="20"/>
      </div>
      <div className="FilterExtended_Apply">
          <br/>
          <button className="FilterExtended_Apply_Button">Применить</button>
      </div>
  </div>
      );
    }
  }