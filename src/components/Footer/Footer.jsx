import React, { Component } from 'react';
import styles from './Footer.module.css';
import pencil from '../../icons/pencil.svg';
import bin from '../../icons/bin.svg';
import MainContent from '../MainContent/MainContent';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
}

  handleClick() {
    document.getElementById('DeleteDialog').style = 'display: flex';
}
handleClickChange() {
  document.getElementById('Sidebar').style = 'display: flex';
}

    render() {
      let numberOfSelected = this.props.data;
      return (
        <div className={styles._}>
           <div className={styles.Selected}>
             <div className={styles.SelectedNumber}>
               Выбрано записей: {numberOfSelected}
             </div>

             <button className={styles.ChangeButton} id="ChangeButton" onClick={this.handleClickChange}>
             <img src={pencil} alt="pencil" width="13px" height="13px" />
              Изменить статус
             </button>

             <button className={styles.DeleteButton} id="DeleteButton" onClick={this.handleClick}>
             <img src={bin} alt="bin" width="13px" height="13px" />
              Удалить
             </button>                  
     
           </div>
           <div className={styles.Pagination}>
             1    2    3   ...  18    #
           </div>
        </div>
      );
    }
  }