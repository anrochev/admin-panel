import React, { Component } from 'react';
import styles from './MainContent.module.css';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import FilterExtended from '../FilterExtended/FilterExtended';
import TOrder from '../TOrder/TOrder';
import Footer from '../Footer/Footer';
import DeleteDialog from '../DeleteDialog/DeleteDialog';
const tableData = [
  {ID: 1270989, date: "15.02.2021", status: "Отложен", itemsCount: 3, sum: 101907.00, customerName: "Чернышев Филипп Семенович"},
  {ID: 2353474, date: "12.03.2021", status: "Выполнен", itemsCount: 1, sum: 98003.30, customerName: "Филиппов Степан Васильевич"},
  {ID: 21233333, date: "03.02.2021", status: "Отменен", itemsCount: 2, sum: 3800.00, customerName: "Тихонова Алина Давидовна"}
];
let numberOfSelected = 0;
export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {numberOfSelected: 0};
}

    render() {
      return (
        <div className={styles._}>
          <Header/>
          <Filter/>
          <FilterExtended/>
          <TOrder data={tableData}/>
          <DeleteDialog/>       
          <Footer data={this.state.numberOfSelected}/>  
        </div>
      );
    }
  }