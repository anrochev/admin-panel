import React from 'react';
import styles from './TVendorCode.module.css';

export default function TVendorCode({ data }) {

    const data1 = data.map(order =>
        <tr className={styles.String} key={order.key}>
            <td>{order.article}</td>
            <td>{order.itemName}</td>
            <td>{Number(order.itemSum).toLocaleString('ru') + ' ₽'}</td>
        </tr>
    );

    return (

        <div className={styles._}>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th className={styles.Article}>Артикул </th>
                        <th className={styles.ItemName}>Наименование </th>
                        <th className={styles.ItemSum}>Цена </th>
                    </tr>
                </thead>
                <tbody className={styles.Body}>
                    {data1}
                </tbody>
            </table>
        </div>
    );
}
