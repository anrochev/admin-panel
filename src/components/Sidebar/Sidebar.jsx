import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';
import checkmark from '../../icons/checkmark.svg';
import xlarge from '../../icons/x-large.svg';
import TVendorCode from '../TVendorCode/TVendorCode';
import { TVendorCodeFooter } from '../TVendorCode/TVendorCodeFooter';
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'components/Inputs/Select'
import { InputsWithLabel } from 'components/Inputs/InputsWithLabel'
import { orderUpdate } from 'features/Orders/ordersSlice'

const tableData = [
  { key: 1, article: "rt.12024", itemName: "Стил блейдс фо грасс", itemSum: 15339.00 },
  { key: 2, article: "al.24600", itemName: "Газонокосилка Apple Magic Gracc", itemSum: 82664.00 },
];
const trueValue = true

export function Sidebar({ orderForEdit }) {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState('')
  const [status, setStatus] = useState('')
  const [code, setCode] = useState('')
  const [isCodeError, setIsCodeError] = useState(false)
  const [textCodeError, setTextCodeError] = useState('')
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)

  function handleClick() {
    document.getElementById('Sidebar').style = 'display: none';
  }

  useEffect(() => {
    if (orderForEdit.customerName) {
      setFullName(orderForEdit.customerName)
    }
    if (orderForEdit.status) {
      setStatus(orderForEdit.status.toString())
    }
    setCode('')
  }, [orderForEdit])

  function handleClickEditOrder() {
    if (code === '000') {
      setIsCodeError(false)
      setTextCodeError('')
      const order = { ...orderForEdit }
      order.customerName = fullName
      order.status = status
      console.log(order)
      dispatch(orderUpdate(order))
      document.getElementById('Sidebar').style = 'display: none';
    } else {
      // setIsCodeError(true)
      setTextCodeError(code === '' ? 'Код подтверждения не заполнен' : 'Код подтверждения не верен')
    }
  
  }

  function handleFioChange({ target: { value: currentValue } }) {
    setFullName(currentValue)
  }

  function handleStatusChange({ target: { value: currentValue } }) {
    setStatus(currentValue)
  }

  function handleCodeChange({ target: { value: currentValue } }) {
    setCode(currentValue)
  }

  function handleCodeReset() {
    setCode('')
  }
  var orderItems1;
  if (orderForEdit.orderItems === undefined) {
    orderItems1 = tableData;
    orderForEdit.date = '2021-06-29'
  }
  else {
    orderItems1 = orderForEdit.orderItems;
  }

  return (
    <div className={styles.Sidebar} id="Sidebar">
      <div className={styles.Top}>
        <div className={styles.TopNumber}># Заявка {orderForEdit.number}</div>
        <img src={xlarge} alt="checkmark" className={styles.Checkmark} width="18px" height="18px" onClick={handleClick} />
      </div>
      <div className={styles.Body}>
  
        <div className={styles.BodyDate}>
          <InputsWithLabel
            type='disabled'
            placeholder='Дата и время заказа'
            caption='Дата и время заказа'
            valueInput={orderForEdit.date.slice(8, 10) + '.' + orderForEdit.date.slice(5, 7) + '.' + orderForEdit.date.slice(0, 4)}
            disabled={trueValue}
          />
        </div> 

        <div className={styles.FIO}>
          <InputsWithLabel
            type='disabled'
            placeholder='ФИО покупателя'
            caption='ФИО покупателя'
            valueInput={fullName}
            onChange={handleFioChange}
          />
        </div>

        <div className={styles.TVendorCode}>
          <TVendorCode data={orderItems1} />
          <TVendorCodeFooter price={orderForEdit.sum} />
        </div>       

        <div className={styles.Loyal}>
          <InputsWithLabel
            placeholder='Уровень лояльности'
            caption='Уровень лояльности'
            valueInput={orderForEdit.privilege}
            disabled={trueValue}
          />
        </div>

        <div className={styles.Status}>Статус заказа
       
          <Select
            items={stateOfOrders}
            onChange={handleStatusChange}
            currentValue={orderForEdit.status}
          />
        </div>
    
        <div className={styles.OrderCode}>
          <InputsWithLabel
            placeholder='Код подтверждения (тестовый код 000)'
            caption='Код подтверждения'
            isError={isCodeError}
            onChange={handleCodeChange}
            onReset={handleCodeReset}
            valueInput={code}
          />
        </div>

      </div>
      <div className={styles.Bottom}>
        <div className={styles.Progress}>{textCodeError}
        </div>

        <button className={styles.SaveButton} id="save_button" onClick={handleClickEditOrder}>
          <img src={checkmark} alt="checkmark" width="13px" height="13px" />
          Сохранить</button>

      </div>
    </div>
  );
}