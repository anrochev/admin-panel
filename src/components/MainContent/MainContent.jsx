import React, { Component } from 'react';
import './MainContent.css';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import FilterExtended from '../FilterExtended/FilterExtended';
import TOrder from '../TOrder/TOrder';
import Footer from '../Footer/Footer';
const tableData = [
  {ID: 1270989, date: "15.02.2021", status: "Отложен", itemsCount: 3, sum: 101907.00, customerName: "Чернышев Филипп Семенович"},
  {ID: 2353474, date: "12.03.2021", status: "Выполнен", itemsCount: 1, sum: 98003.30, customerName: "Филиппов Степан Васильевич"},
  {ID: 21233333, date: "03.02.2021", status: "Отменен", itemsCount: 2, sum: 3800.00, customerName: "Тихонова Алина Давидовна"}
];
export default class MainContent extends Component {


    render() {
      return (
        <div className="MainContent">
          <Header/>
          <Filter/>
          <FilterExtended/>
          <TOrder data={tableData}/>
          <Footer/>  
        </div>
      );
    }
  }