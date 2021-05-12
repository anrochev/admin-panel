import React, { Component } from 'react';
import './TOrder.css';
import v_arrow from '../../icons/v_arrow.svg';
import dot from '../../icons/dot.svg';

export default class TOrder extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        document.getElementsByClassName('Sidebar')[0].style = 'display: flex';
    }

    render() {
        const data = this.props.data.map(order =>
            <tr className="TOrder_String" onDoubleClick={this.handleClick}>
                <td width="10px"><input type="checkbox" unchecked name="checkString" /></td>
                <td width="90px">{order.ID}</td>
                <td width="200px">{order.date}</td>
                <td width="200px"> <img src={dot} alt="dot" width="15px" height="15px" />{order.status}</td>
                <td width="200px">{order.itemsCount}</td>
                <td width="200px">{Number(order.sum).toLocaleString('ru') + ' \u20BD'} </td>
                <td width="200px">{order.customerName}</td>
            </tr>
        );
        return (

            <div className="TOrder">
                <table className="Table1">
                    <thead>
                        <tr>
                            <th className="th1" width="10px">
                                <input type="checkbox" unchecked name="checkAll" />
                            </th>
                            <th className="th1" width="90px">#</th>
                            <th className="th1" width="200px">Дата
                      <img src={v_arrow} alt="v_arrow" width="15px" height="15px" />
                            </th>
                            <th className="th1" width="200px">Статус
                      <img src={v_arrow} alt="v_arrow" width="15px" height="15px" />
                            </th>
                            <th className="th1" width="200px">Позиций
                      <img src={v_arrow} alt="v_arrow" width="15px" height="15px" />
                            </th>
                            <th className="th1" width="200px">Сумма
                      <img src={v_arrow} alt="v_arrow" width="15px" height="15px" />
                            </th>
                            <th className="th1">ФИО покупателя</th>
                        </tr>
                    </thead>
                    <tbody className="TOrder_Body">
                        {data}
                    </tbody>
                </table>
                <div className="TOrder_Footer">Итоги таблицы</div>
            </div>
        );
    }
}
