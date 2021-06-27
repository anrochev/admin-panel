import React from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'components/Icons/Icon'
import styles from 'components/TOrders/Row/TableGridRowState.module.css'

export function TableGridRowState ({ value }) {
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)
 
  const state = stateOfOrders.filter(order => order.key === value.toString())

  const { icon, colorIcon, value: text } = state[0]

  return (
    <div className={styles.state}>
      <div className={styles.icon}>
        <Icon icon={icon} color={colorIcon} />
      </div>

      <p className={styles.text}>{text}</p>
    </div>
  )
}


