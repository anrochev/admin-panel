import React from 'react';
import styles from './THeader.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { TableHeaderColumnWithCheckBox } from 'components/TOrders/THeader/TableHeaderColumnWithCheckBox'
import { TableHeaderIcon } from 'components/TOrders/THeader/TableHeaderIcon'
import {
  orderCheckBoxCheckedAll,
  orderCheckBoxUnCheckedAll,
  sortChange
} from 'features/Orders/ordersSlice';
export function THeader(onclick) {
  const dispatch = useDispatch()
  const headerGridSort = useSelector((state) => state.orders.headerGridSort)

  function handleCheckBoxChange({ target: { checked } }) {
    if (checked) {
      dispatch(orderCheckBoxCheckedAll())
    } else {
      dispatch(orderCheckBoxUnCheckedAll())
    }
  }

  return (
    <thead className={styles._}>
      <tr className={styles.tr}>

        <th className={styles.th} width="10px">
          <TableHeaderColumnWithCheckBox onChange={handleCheckBoxChange} />
        </th>


        <th className={styles.th} width="90px"
          onClick={() => dispatch(sortChange('number'))} sorting={headerGridSort.find((header) => header.field === 'number').sort}>#
          <TableHeaderIcon size='large' sorting={headerGridSort.find((header) => header.field === 'number').sort} />
        </th>

        <th className={styles.th} width="200px"
          onClick={() => dispatch(sortChange('date'))} sorting={headerGridSort.find((header) => header.field === 'date').sort}>Дата
          <TableHeaderIcon size='large' sorting={headerGridSort.find((header) => header.field === 'date').sort} />
        </th>

        <th className={styles.th} width="200px"
          onClick={() => dispatch(sortChange('status'))} sorting={headerGridSort.find((header) => header.field === 'status').sort}>Статус
          <TableHeaderIcon size='large' sorting={headerGridSort.find((header) => header.field === 'status').sort} />

        </th>
        <th className={styles.th} width="200px"
          onClick={() => dispatch(sortChange('itemsCount'))} sorting={headerGridSort.find((header) => header.field === 'itemsCount').sort}>Позиций
          <TableHeaderIcon size='large' sorting={headerGridSort.find((header) => header.field === 'itemsCount').sort} />
        </th>

        <th className={styles.th} width="200px"
          onClick={() => dispatch(sortChange('sum'))} sorting={headerGridSort.find((header) => header.field === 'sum').sort}>Сумма
          <TableHeaderIcon size='large' sorting={headerGridSort.find((header) => header.field === 'sum').sort} />
        </th>
        <th className={styles.th} width="auto"
          onClick={() => dispatch(sortChange('customerName'))} sorting={headerGridSort.find((header) => header.field === 'customerName').sort}>ФИО покупателя
          <TableHeaderIcon size='large' sorting={headerGridSort.find((header) => header.field === 'customerName').sort} />
        </th>
      </tr>
    </thead>
  )
}