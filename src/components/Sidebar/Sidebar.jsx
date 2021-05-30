import React, { Component } from 'react';
import './Sidebar.css';
import checkmark from '../../icons/checkmark.svg';
import xlarge from '../../icons/x-large.svg';
import TVendorCode from '../TVendorCode/TVendorCode';


const tableData = [
  {art: "rt.12024",  name: "Стил блейдс фо грасс",  price: 15339.00},
  {art: "al.24600",  name: "Газонокосилка Apple Magic Gracc",  price: 82664.00},
];

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
               <div className="Sidebar_Body_Date">Дата и время заказа    
                   <br/>
                   <input type="text" name="OrderDate" className="Sidebar_Body_Item" value="06.12.2021" size="58"/>        
               </div>
               <div className="Sidebar_Body_FIO">ФИО покупателя   
                   <br/>
                   <input type="text" name="OrderFIO" className="Sidebar_Body_Item"  value="Степан" size="58"/>                
               </div>

               <div className="Sidebar_Body_TVendorCode">  
                   <TVendorCode data={tableData}/>   
               </div>

               <div className="Sidebar_Body_Loyal">Уровень лояльности   
                   <br/>
                   <input type="text" name="OrderLoyal" className="Sidebar_Body_Item" value="Новичок" size="58"/>                
               </div>
               <div className="Sidebar_Body_Status ">Статус заказа   
                   <br/>
                  <select name="select" className="Sidebar_Select Sidebar_Body_Item" size="1">
                      <option value="s1">Новый</option>
                      <option value="s2">Расчет</option>
                      <option selected value="s3">Подтвержден</option>
                      <option value="s4">Отложен</option>
                      <option value="s5">Выполнен</option>
                      <option value="s6">Отменен</option>
                   </select>
                   {/* <input type="text" name="OrderStatus" value="Новый" size="58"/>                 */}
               </div>
               <div className="Sidebar_Body_OrderCode">Код подтверждения   
                   <br/>
                   <input type="text" name="OrderCode" className="Sidebar_Body_Item" value="000" size="58"/>                
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