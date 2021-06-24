import React from 'react'
import { CheckBox } from '../../CheckBox/CheckBox'
import styles from './RowCheckBox.module.css'

export function RowCheckBox ({ children, onChange, checked, name }) {
  return (
    <div className={styles.checkBox}>
      <CheckBox
        checked={checked}
        name={name}
        onChange={onChange}
      >
        {children}
      </CheckBox>
    </div>
  )
}

