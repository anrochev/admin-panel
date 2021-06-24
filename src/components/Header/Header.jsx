import React, { useState } from 'react';
import styles from './Header.module.css';
import { ChangeTheme } from 'components/window/ChangeTheme'
import { useSelector } from 'react-redux'
import { Button } from 'components/Buttons/Button'
export function Header() {

  const [showChangeTheme, setShowChangeTheme] = useState(false)
  const theme = useSelector((state) => state.ui.theme)
  const iconName = theme === 'light' ? 'Sun' : 'Moon'
  const themeName = theme === 'light' ? 'Светлая тема' : 'Темная тема'

  function handleClick() {
    setShowChangeTheme(true)
  }

  function handleClose() {
    setShowChangeTheme(false)
  }
  return (
    <div className={styles._}>
      <div className={styles.Title}>Список заказов</div>

      <div className={styles.Theme}>
        <Button size='Big' icon={iconName} onClick={handleClick} textColor='Primary' className={styles.Button}>
          {themeName}
        </Button>
        <ChangeTheme show={showChangeTheme} onClose={handleClose} />
      </div>
    </div>
  );
}