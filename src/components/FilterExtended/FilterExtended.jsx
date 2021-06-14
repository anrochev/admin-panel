import React, { Component } from 'react';
import styles from './FilterExtended.module.css';
export default class FilterExtended extends Component {

  render() {
    return (
      <div className={styles._} id="FilterExtended">
        <div className={styles.Date}>
            Дата оформления:<br/>
            <label className="FilterExtended_Date-Begin-Label" htmlFor="FilterExtended_Date-Begin">c </label>
            <input type="date" className={styles.DateBegin} id="FilterExtended_Date-Begin"  size="20"/>
            <label className="FilterExtended_Date-Begin-Label" htmlFor="FilterExtended_Date-End"> по </label>    
            <input type="date" className={styles.DateEnd} id="FilterExtended_Date-End" size="20"/>
        </div>
      <div className={styles.Status}>
          Статус заказа:<br/>
          <select name="select" className={styles.Select} size="1" width="20">
              <option value="s1">Новый</option>
              <option value="s2">Расчет</option>
              <option selected value="s3">Подтвержден</option>
              <option value="s4">Отложен</option>
              <option value="s5">Выполнен</option>
              <option value="s6">Отменен</option>
          </select>
      </div>
      <div className={styles.Sum}>
          Сумма заказа:<br/>
          <input type="text" className={styles.SumFrom} placeholder="с " size="20"/>
          <input type="text" className={styles.SumTo} placeholder="по " size="20"/>
      </div>
      <div className={styles.Apply}>
          <br/>
          <button className={styles.ApplyButton}>Применить</button>
      </div>
  </div>
      );
    }
  }