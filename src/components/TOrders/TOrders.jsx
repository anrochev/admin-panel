import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from './TOrders.module.css';
import { Footer } from '../Footer/Footer';
import { THeader } from './THeader/THeader';
import { RowCheckBox } from './Row/RowCheckBox';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { TableGridRowState } from 'components/TOrders/Row/TableGridRowState'
import {
  fetchOrdersAll,
  orderCheckBoxChecked,
  orderCheckBoxUnChecked,
  setCurrentPage
} from 'features/Orders/ordersSlice'

export function TOrders() {

  const dispatch = useDispatch()

  const selectedOrdersState = useSelector((state) => state.orders.selectedOrders)
  const orders = useSelector((state) => state.orders.filtredOrders)
  const [orderForEdit, setOrderForEdit] = useState({})
  const headerGridSort = useSelector((state) => state.orders.headerGridSort)
  const currentPage = useSelector((state) => state.orders.currentPage)
  const selectedOrdersCount = useSelector((state) => state.orders.selectedOrdersCount)
  const [currentOrders, setCurrentOrders] = useState([])
  const [showEditOrder, setShowEditOrder] = useState(false)  


  useEffect(() => {
    dispatch(fetchOrdersAll())
  }, [])

  let isNeedRefreshDataVar = false;
  let dataSlicePage;
  let pageOffset;
  useEffect(() => {
    pageOffset = (currentPage - 1) * 11;
    dataSlicePage = data.slice(pageOffset, pageOffset + 11)
    setCurrentOrders([...dataSlicePage])
   isNeedRefreshDataVar = true
  }, [headerGridSort, selectedOrdersCount, orders])


  function handleChangeCheckBox({ target: { checked, name } }) {
    if (checked) {
      dispatch(orderCheckBoxChecked(name))
    } else {
      dispatch(orderCheckBoxUnChecked(name))
    }

  }

  function handleClick(event, key) {
    const orderFind = orders.find(order => order.id === key)
    setOrderForEdit(orderFind)
    //document.getElementById('Sidebar').style = 'display: flex';
    setShowEditOrder(true)
    console.log("Обработка открытия заказа")
  }

  function handleCloseEditOrder () {
    setShowEditOrder(false)
  }

  const data = orders.map(order =>
    <tr className={styles.OrderTableRow} key={order.id} onDoubleClick={(event, data) => handleClick(event, order.id)}>
      <td
        width="10px">

        <RowCheckBox
          checked={selectedOrdersState.indexOf(order.id) !== -1}
          name={String(order.id)}
          onChange={handleChangeCheckBox}
        />

      </td>

      <td width="90px">{order.number}</td>
      <td width="200px">{order.date.slice(8, 10) + '.' + order.date.slice(5, 7) + '.' + order.date.slice(0, 4)}</td>

      <td width="200px">
        <TableGridRowState value={order.status} />
      </td>

      <td width="200px">{order.itemsCount}</td>
      <td width="200px">{Number(order.sum).toLocaleString('ru') + ' ₽'} </td>
      <td width="auto">{order.customerName}</td>
    </tr>
  );

  useEffect(() => {
    setCurrentOrders([...data])
  }, [])

  const onPageChanged = ({ currentPage, pageLimit }) => {
    const offset = (currentPage - 1) * pageLimit
    setCurrentOrders(data.slice(offset, offset + pageLimit))
    dispatch(setCurrentPage(currentPage))
  }

  return (

    <div className={styles._}>
      <Sidebar show={showEditOrder} onClose={handleCloseEditOrder} orderForEdit={orderForEdit} />
      <table className={styles.TableOrders}>
        <THeader />

        <tbody className={styles.Body}>
          {currentOrders}
        </tbody>

      </table>
      <div className={styles.Footer}>Итоги таблицы</div>
      <Footer
        onPageChanged={onPageChanged}
        totalRecords={data.length}
        isNeedRefreshPage={isNeedRefreshDataVar}

      />
    </div>
  );
}
