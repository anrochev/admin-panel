import React from 'react'
import styles from 'components/TVendorCode/TVendorCodeFooter.module.css'
import propTypes from 'prop-types'

export function TVendorCodeFooter({ price }) {
  return (

    <div className={styles.tableFooter}>
      <p className={styles.text}>Итоговая сумма:</p>
      <p className={styles.text}>{parseFloat(price).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
    </div>

  )
}

TVendorCodeFooter.propTypes = {
  price: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ])
}

TVendorCodeFooter.defaultProps = {
  price: ''
}
