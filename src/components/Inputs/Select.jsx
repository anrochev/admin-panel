import styles from 'components/Inputs/Select.module.css'
import React, { useState, useEffect } from 'react'

export function Select ({ items, currentValue, onChange }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(currentValue)
  }, [currentValue])

  function handleChange (event) {
    const { target: { value: currentValue } } = event
    setValue(currentValue)
    onChange(event)
  }

  return (
    <div className={styles.inputPanel}>
      <select
        value={value}
        className={styles.inputStyle}
        onChange={handleChange}
      >
        {
          items.map((item) => {
            return (
              <option key={item.key} className={styles.options}  value={item.key}>{item.value}</option>
            )
          })
        }
      </select>
    </div>
  )
}

