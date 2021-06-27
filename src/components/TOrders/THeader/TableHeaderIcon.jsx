import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { sortingASC, sortingDESC, sortingNONE } from 'features/Orders/ordersSlice'
import { Icon } from 'components/Icons/Icon'
import styles from 'components/TOrders/THeader/TableHeaderColumn.module.css'

export function TableHeaderIcon ({ children, size, sorting, onClick }) {
  const [rotate, setRotate] = useState(0)
  const [visibleIcon, setVisibleIcon] = useState(false)
 
  const iconStyleName = classNames({
    [styles.icon]: visibleIcon,
    [styles.iconInvisible]: !visibleIcon
  })

  useEffect(() => {
    if (sorting === sortingASC) {
      setRotate(0)
    }
    if (sorting === sortingDESC) {
      setRotate(180)
    }
    setVisibleIcon(sorting !== sortingNONE)
  }, [sorting])

  return (

       <div className={iconStyleName}>
        <Icon icon='Arrow' color='theme' rotate={rotate} />
       </div>

  )
}

