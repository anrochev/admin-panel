import React, { useState } from 'react';
import styles from './FilterExtended.module.css';
import { CheckBoxMultiSelect } from 'components/CheckBox/CheckBoxMultiSelect'
import { useDispatch, useSelector } from 'react-redux'
import { filterExtended } from 'features/Orders/ordersSlice'
import { InputsWithLabel } from 'components/Inputs/InputsWithLabel'
import { Input } from 'components/Inputs/Input'
import classNames from 'classnames'

export function FilterExtended({ visible }) {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    dateOrderFrom: '',
    dateOrderTo: '',
    statusFilter: [],
    priceFrom: '',
    priceTo: ''
  })
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)

  const visiblePanelStyleName = classNames({
    [styles.panel]: true,
    [styles.panelInVisible]: !visible
  })


  function handleClickApplyFilter() {
    console.log({ ...form })
    dispatch(filterExtended({ ...form }))
  }

  function handleChangeInput({ target: { value, name } }) {
    setForm({ ...form, [name]: value })
  }

  function handleResetInput(name) {
    console.log(name)
    setForm({ ...form, [name]: '' })
  }

  function handleChangeStatus(value) {
    setForm({ ...form, statusFilter: [...value] })
  }



  return (
    <div className={visiblePanelStyleName} id="FilterExtended"> 

      <div className={styles.inputDateFrom}>
          <InputsWithLabel
            type='date'
            name='dateOrderFrom'
            placeholder='dd.mm.dddd'
            labeltext='с'
            caption='Дата оформления'
            onChange={handleChangeInput}
            onReset={handleResetInput}
          />
        </div>
        <div className={styles.inputDateTo}>
          <Input type='date' name='dateOrderTo' placeholder='dd.mm.dddd' labeltext='по' onChange={handleChangeInput} onReset={handleResetInput} />
        </div>

      <div className={styles.inputStatus}> Статус заказа:

        <CheckBoxMultiSelect
          items={stateOfOrders}
          defaultValue='Любой'
          placeholder='dd.mm.dddd'
          caption='Статус заказа'
          onChange={handleChangeStatus}
          selectedItems = {form.statusFilter}
        />
      </div>

      <div className={styles.inputSummaFrom}>
          <InputsWithLabel
            type='number'
            name='priceFrom'
            placeholder='Р'
            labeltext='от'
            caption='Сумма заказа'
            onChange={handleChangeInput}
            onReset={handleResetInput}
          />
        </div>
        <div className={styles.inputSummaTo}>
          <Input type='number' name='priceTo' placeholder='Р' labeltext='до' onChange={handleChangeInput} onReset={handleResetInput} />
        </div>


      <div className={styles.Apply}>
        <br />
        <button className={styles.ApplyButton} onClick={handleClickApplyFilter}>
          Применить</button>
      </div>
    </div>
  );
}