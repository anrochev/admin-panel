import styles from './App.module.css';
import React, { useEffect } from 'react';
import { MainContent } from 'components/MainContent/MainContent';
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.ui.theme)
  const themeStyle = styles[`${theme}Theme`]
  const styleAdminPanel = classNames(
    {
      [styles.adminPanel]: true,
      [themeStyle]: true
    }
  )

  useEffect(() => {
    document.body.classList = []
    document.body.classList.add(themeStyle)
    document.body.classList.add(styles.bodyMain)
  }, [themeStyle])

  return (
    <div className={styleAdminPanel}>
      <MainContent />
    </div>
  );
}
export default App;
