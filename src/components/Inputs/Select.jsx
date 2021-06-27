import styles from 'components/Inputs/Select.module.css'
import React, { useState, useEffect } from 'react'

export function Select ({ items, currentValue, onChange, name }) {
  // const [value, setValue] = useState('')
  // useEffect(() => {
  //   setValue(currentValue)
  // }, [currentValue])

  // function handleChange (event) {
  //   const { target: { value: currentValue } } = event
  //   setValue(currentValue)
  //   onChange(event)
  // }

  console.log("name="+name);
  console.log("currentValue="+currentValue);

  return (
    <div className={styles.inputPanel}>
      <select
      //  value={value}
        value={currentValue}

        name={name}
        className={styles.inputStyle}

      //  onChange={handleChange}
        onChange={onChange}
      >
        {
          items.map((item) => {
            return (
              // <option key={item.key} className={styles.options}  value={item.key}>{item.value}</option>
              <option key={item.key} className={styles.options}  value={item.key}>{item.value}</option>
            )
          })
        }
      </select>
    </div>
  )
}

