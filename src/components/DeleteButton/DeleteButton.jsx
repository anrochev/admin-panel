import styles from './DeleteButton.module.css'
import React from 'react'

export function DeleteButton({  onClick }) {
  return (
    <div className={styles._}>
      <button
        className={styles.button}
        type="button"
    
        onClick={onClick}>
        Удалить
      </button>
    </div>
  )
}
