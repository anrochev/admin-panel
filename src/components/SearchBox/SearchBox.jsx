import React, {useState} from 'react'
import styles from './SearchBox.module.css'
import classNames from 'classnames/bind'

export function SearchBox({ onChange, onReset }) {
  const [value, setValue] = useState('')

   function handleReset () {
    setValue('')
    onReset()
  }

  function handleChange ({ target: { value: currentValue } }) {
    setValue(currentValue)
    onChange({target: { value: currentValue }})
  }

  return (
    <div className={styles._}>
      <button className={styles.button_search} type="button" />
      <input id = "FilterInputField"
        type="text"
        className={styles.searchbar}
        placeholder="Номер заказа или ФИО"
        onChange={handleChange}
        value={value}
      />
      <button
        className={classNames(styles.button_reset, {
          [styles.button_reset_hide]: value === '',
        })}
        type="button"
        onClick={handleReset}></button>
    </div>
  )
}
