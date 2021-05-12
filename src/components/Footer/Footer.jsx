import React, { Component } from 'react';
import './Footer.css';
import pencil from '../../icons/pencil.svg';
import bin from '../../icons/bin.svg';
export default class Footer extends Component {
    render() {
      return (
        <div className="Footer">
           <div className="FooterForSelected">
             <div className="FooterForSelectedNumber">
               Выбрано записей: 0
             </div>

             <button className="FooterForSelectedChangeButton" id="ChangeButton">
             <img src={pencil} alt="pencil" width="13px" height="13px" />
              Изменить статус
             </button>

             <button className="FooterForSelectedDeleteButton" id="DeleteButton">
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