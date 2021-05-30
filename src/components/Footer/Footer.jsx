import React, { Component } from 'react';
import './Footer.css';
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
    document.getElementsByClassName('DeleteDialog')[0].style = 'display: flex';
}
handleClickChange() {
  document.getElementsByClassName('Sidebar')[0].style = 'display: flex';
}

    render() {
      let numberOfSelected = this.props.data;
      return (
        <div className="Footer">
           <div className="FooterForSelected">
             <div className="FooterForSelectedNumber">
               Выбрано записей: {numberOfSelected}
             </div>

             <button className="FooterForSelectedChangeButton" id="ChangeButton" onClick={this.handleClickChange}>
             <img src={pencil} alt="pencil" width="13px" height="13px" />
              Изменить статус
             </button>

             <button className="FooterForSelectedDeleteButton" id="DeleteButton" onClick={this.handleClick}>
             <img src={bin} alt="bin" width="13px" height="13px" />
              Удалить
             </button>                  
     
           </div>
           <div className="FooterPagination">
             1    2    3   ...  18    #
           </div>
        </div>
      );
    }
  }