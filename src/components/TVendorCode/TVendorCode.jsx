import React from 'react';
import styles from './TVendorCode.module.css';

export default function TVendorCode({ data }) {

    const data1 = data.map(order =>
        <tr className={styles.String} key={order.key}>
            <td width="90px">{order.article}</td>
            <td width="200px">{order.itemName}</td>
            <td width="150px">{Number(order.itemSum).toLocaleString('ru') + ' \u20BD'}</td>
        </tr>
    );

    return (

        <div className={styles._}>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th className="th1" width="100px">Артикул </th>
                        <th className="th1" width="200px">Наименование </th>
                        <th className="th1" width="150px">Цена </th>
                    </tr>
                </thead>
                <tbody className={styles.Body}>
                    {data1}
                </tbody>
            </table>
        </div>
    );
}
