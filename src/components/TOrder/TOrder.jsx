import React, { Component } from 'react';
import styles from './TOrder.module.css';
import v_arrow from '../../icons/v_arrow.svg';
import dot from '../../icons/dot.svg';
import Footer from '../Footer/Footer';

export default class TOrder extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickCheckAll = this.handleClickCheckAll.bind(this);
 
    }

    handleClick() {
        document.getElementById('Sidebar').style = 'display: flex';
    }
    handleClickCheckAll() {
        let isChecked = document.getElementById('mainCheckBox').checked;     
        Array.from(document.getElementsByClassName("stringCheckBox")).forEach(
            function(element) {
                element.checked =  isChecked ?  true : false;                        
            });   
            <Footer data={10}/>         
    }

    render() {
        const data = this.props.data.map(order =>
            <tr className={styles.String} onDoubleClick={this.handleClick}>
                <td width="10px"><input type="checkbox" unchecked name="checkString" className="stringCheckBox" /></td>
                <td width="90px">{order.ID}</td>
                <td width="200px">{order.date}</td>
                <td width="200px"> <img src={dot} alt="dot" width="15px" height="15px" />{order.status}</td>
                <td width="200px">{order.itemsCount}</td>
                <td width="200px">{Number(order.sum).toLocaleString('ru') + ' \u20BD'} </td>
                <td width="200px">{order.customerName}</td>
            </tr>
        );
        return (

            <div className={styles._}>
                <table className="Table1">
                    <thead>
                        <tr>
                            <th className={styles.th1} width="10px">
                                <input type="checkbox" unchecked name="checkAll" id ="mainCheckBox" className="mainCheckBox" onClick={this.handleClickCheckAll}/>
                            </th>
                            <th className={styles.th1} width="90px">#</th>
                            <th className={styles.th1} width="200px">Дата
                      <img src={v_arrow} alt="v_arrow" width="15px" height="15px" />
                            </th>
                            <th className={styles.th1} width="200px">Статус
                      <img src={v_arrow} alt="v_arrow" width="15px" height="15px" />
                            </th>
                            <th className={styles.th1} width="200px">Позиций
                      <img src={v_arrow} alt="v_arrow" width="15px" height="15px" />
                            </th>
                            <th className={styles.th1} width="200px">Сумма
                      <img src={v_arrow} alt="v_arrow" width="15px" height="15px" />
                            </th>
                            <th className={styles.th1}>ФИО покупателя</th>
                        </tr>
                    </thead>
                    <tbody className={styles.Body}>
                        {data}
                    </tbody>
                </table>
                <div className={styles.Footer}>Итоги таблицы</div>
            </div>
        );
    }
}
