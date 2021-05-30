import React, { Component } from 'react';
import './TVendorCode.css';
import v_arrow from '../../icons/v_arrow.svg';
import dot from '../../icons/dot.svg';

export default class TVendorCode extends Component {


    render() {
        const data = this.props.data.map(order =>
            <tr className="TVendorCode_String">
                    <td width="90px">{order.art}</td>
                    <td width="200px">{order.name}</td>
                    <td width="150px">{Number(order.price).toLocaleString('ru') + ' \u20BD'}</td>              
            </tr>
        );
        var finalSumText = 'Итоговая сумма: '+ '98003 '+' \u20BD';
        return (

            <div className="TVendorCode">
                <table className="TVendorCode_Header">
                    <thead>
                        <tr>
                            <th className="th1" width="100px">Артикул </th>
                            <th className="th1" width="200px">Наименование </th>
                            <th className="th1" width="150px">Цена </th>          
                        </tr>
                    </thead>
                    <tbody className="TVendorCode_Body">
                        {data}
                    </tbody>
                </table>
                <div className="TVendorCode_FooterWrapper">  
                   <div className="TVendorCode_Footer">{finalSumText}</div>
                </div>
            </div>
        );
    }
}
