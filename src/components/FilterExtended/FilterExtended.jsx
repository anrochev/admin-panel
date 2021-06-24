import React, { useState } from 'react';
import styles from './FilterExtended.module.css';
import { CheckBoxMultiSelect } from 'components/CheckBox/CheckBoxMultiSelect'
import { useDispatch, useSelector } from 'react-redux'
import { filterExtended } from 'features/Orders/ordersSlice'
import { InputsWithLabel } from 'components/Inputs/InputsWithLabel'
import { Input } from 'components/Inputs/Input'

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
    <div className={styles._} id="FilterExtended">
      {/* <div className={styles.Date}>
        Дата оформления:<br />
        <label className="FilterExtended_Date-Begin-Label" htmlFor="FilterExtended_Date-Begin">c </label>
        <input type="date" className={styles.DateBegin} name='dateOrderFrom' id="FilterExtended_Date-Begin"
          size="20" onChange={handleChangeInput} onReset={handleResetInput} />
        <label className="FilterExtended_Date-Begin-Label" htmlFor="FilterExtended_Date-End"> по </label>
        <input type="date" className={styles.DateEnd} name='dateOrderTo' id="FilterExtended_Date-End" size="20"
          onChange={handleChangeInput} onReset={handleResetInput} />
      </div> */}

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
       {/* <label className={styles.inputStatusLabel}>Статус заказа:</label>  */}
        {/* <br /> */}
        <CheckBoxMultiSelect
          items={stateOfOrders}
          defaultValue='Любой'
          placeholder='dd.mm.dddd'
          caption='Статус заказа'
          onChange={handleChangeStatus}
        />
      </div>

      {/* <div className={styles.Sum}>
        Сумма заказа:<br />
        <input type="text" className={styles.SumFrom} name='priceFrom' placeholder="с "
          size="20" onChange={handleChangeInput} onReset={handleResetInput} />
        <input type="text" className={styles.SumTo} name='priceTo' placeholder="по "
          size="20" onChange={handleChangeInput} onReset={handleResetInput} />
      </div> */}

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