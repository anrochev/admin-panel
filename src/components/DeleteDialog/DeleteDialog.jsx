import React, { Component } from 'react';
import styles from './DeleteDialog.module.css';
export default class DeleteDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    document.getElementById('DeleteDialog').style = 'display: none';
  }
  render() {
    return (
      <div className={styles._}  id="DeleteDialog">

        <div className={styles.Question}>
          Удалить n записей?
        </div>

        <button className={styles.DeleteButton} id="delete_button" onClick={this.handleClick}>
          Удалить
                </button>

        <button className={styles.CancelButton} id="cancel_button" onClick={this.handleClick}>
          Отмена
                </button>

      </div>
    );
  }
}