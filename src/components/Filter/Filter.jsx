import React from 'react';
import styles from './Filter.module.css';
import filter from '../../icons/filter.svg';
import refresh from '../../icons/refresh.svg';
import { SearchBox } from 'components/SearchBox/SearchBox'
import { useDispatch } from 'react-redux'
import { filterFioOrNumber } from 'features/Orders/ordersSlice'

let isFilterOn = false;
export function Filter() {
  const dispatch = useDispatch()
  
  function handleClick() {
    isFilterOn = !isFilterOn;
    if (isFilterOn) {
      document.getElementById('FilterExtended').style = 'display:flex';
    }
    else {
      document.getElementById('FilterExtended').style = 'display:none';
    }
  }

  return (
    <div className={styles._}>
      {/* <div className={styles.Number}>
        <input type="text" className={styles.NumberInput} placeholder="Номер заказа или ФИО" size="29" />
      </div> */}
      {/* <SearchBox onChange={onFilter} onClear={onClear} value={value} /> */}
      <SearchBox 
         onChange={({ target: { value } }) => dispatch(filterFioOrNumber(value))}
         onReset={() => dispatch(filterFioOrNumber(''))}
      />
      <button className={styles.Button} id="filter_button" onClick={handleClick}>
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
