import React, { Component } from 'react';
import './Sidebar.css';
import checkmark from '../../icons/checkmark.svg';
import xlarge from '../../icons/x-large.svg';
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    document.getElementsByClassName('Sidebar')[0].style = 'display: none';
  }
    render() {
      return (
        <div className="Sidebar">           
            <div className="Sidebar_Top">
              <div className="Sidebar_Top_Number"># Заявка 2353474</div>
              <img src={xlarge} alt="checkmark" className="Sidebar_Top_Checkmark" width="18px" height="18px" onClick={this.handleClick}/>
            </div>
            <div className="Sidebar_Body">
               <div className="Sidebar_Body_Date Sidebar_Body_Item">Дата и время заказа    
                   <br/>
                   <input type="text" name="OrderDate" value="06.12.2021" size="58"/>        
               </div>
               <div className="Sidebar_Body_FIO Sidebar_Body_Item">ФИО покупателя   
                   <br/>
                   <input type="text" name="OrderFIO" value="Степан" size="58"/>                
               </div>
               <div className="Sidebar_Body_TOrder">Таблица заказа   
                   <div className="Sidebar_Body_TOrder_Header">Шапка таблицы                        
                    </div>
                    <div className="Sidebar_Body_TOrder_Body">Тело таблицы                        
                    </div>      
                    <div className="Sidebar_Body_TOrder_Footer">Итоги таблицы                       
                    </div>    
               </div>
               <div className="Sidebar_Body_Loyal Sidebar_Body_Item">Уровень лояльности   
                   <br/>
                   <input type="text" name="OrderLoyal" value="Новичок" size="58"/>                
               </div>
               <div className="Sidebar_Body_Status Sidebar_Body_Item">Статус заказа   
                   <br/>
                   <input type="text" name="OrderStatus" value="Новый" size="58"/>                
               </div>
               <div className="Sidebar_Body_OrderCode Sidebar_Body_Item">Код подтверждения   
                   <br/>
                   <input type="text" name="OrderCode" value="000" size="58"/>                
               </div>          
            </div>
            <div className="Sidebar_Bottom">
                 <div className="Sidebar_Bottom_Progress">Ошибка или индикатор загрузки                 
               </div>
       
                <button className="Save_Button" id="save_button" onClick={this.handleClick}>
                    <img src={checkmark} alt="checkmark" width="13px" height="13px"/>                           
                     Сохранить</button>

            </div>
         </div>
      );
    }
  }