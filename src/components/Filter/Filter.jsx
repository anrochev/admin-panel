import React from 'react';
import styles from './Filter.module.css';
import filter from '../../icons/filter.svg';
import refresh from '../../icons/refresh.svg';
import { SearchBox } from 'components/SearchBox/SearchBox'
import { useDispatch } from 'react-redux'
import { filterFioOrNumber } from 'features/Orders/ordersSlice'
import { changeVisibleFilter } from 'features/ui/uiSlice'

let isFilterOn = false;
export function Filter() {
  const dispatch = useDispatch()  

  return (
    <div className={styles._}>
 
      <SearchBox 
         onChange={({ target: { value } }) => dispatch(filterFioOrNumber(value))}
         onReset={() => dispatch(filterFioOrNumber(''))}
      />

      <button className={styles.Button} id="filter_button" onClick={() => dispatch(changeVisibleFilter())}>
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
