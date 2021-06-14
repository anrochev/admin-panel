import React, { Component } from 'react';
import styles from './Sidebar.module.css';
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
    document.getElementById('Sidebar').style = 'display: none';
  }
    render() {
      return (
        <div className={styles.Sidebar} id="Sidebar">           
            <div className={styles.Top}>
              <div className={styles.TopNumber}># Заявка 2353474</div>
              <img src={xlarge} alt="checkmark" className={styles.Checkmark} width="18px" height="18px" onClick={this.handleClick}/>
            </div>
            <div className={styles.Body}>
               <div className={styles.BodyDate}>Дата и время заказа    
                   <br/>
                   <input type="text" name="OrderDate" className={styles.BodyItem} value="06.12.2021" size="58"/>        
               </div>
               <div className={styles.FIO}>ФИО покупателя   
                   <br/>
                   <input type="text" name="OrderFIO" className={styles.BodyItem}  value="Степан" size="58"/>                
               </div>

               <div className={styles.TVendorCode}>  
                   <TVendorCode data={tableData}/>   
               </div>

               <div className={styles.Loyal}>Уровень лояльности   
                   <br/>
                   <input type="text" name="OrderLoyal" className={styles.BodyItem}  value="Новичок" size="58"/>                
               </div>
               <div className={styles.Status}>Статус заказа   
                   <br/>
                  <select name="select" className={styles.Select}   size="1">
                      <option value="s1">Новый</option>
                      <option value="s2">Расчет</option>
                      <option selected value="s3">Подтвержден</option>
                      <option value="s4">Отложен</option>
                      <option value="s5">Выполнен</option>
                      <option value="s6">Отменен</option>
                   </select>
                   {/* <input type="text" name="OrderStatus" value="Новый" size="58"/>                 */}
               </div>
               <div className={styles.OrderCode}>Код подтверждения   
                   <br/>
                   <input type="text" name="OrderCode" className={styles.BodyItem}  value="000" size="58"/>                
               </div>          
            </div>
            <div className={styles.Bottom}>
                 <div className={styles.Progress}>Ошибка или индикатор загрузки                 
               </div>
       
                <button className={styles.SaveButton} id="save_button" onClick={this.handleClick}>
                    <img src={checkmark} alt="checkmark" width="13px" height="13px"/>                           
                     Сохранить</button>

            </div>
         </div>
      );
    }
  }