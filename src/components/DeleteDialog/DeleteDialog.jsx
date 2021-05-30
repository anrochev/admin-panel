import React, { Component } from 'react';
import './DeleteDialog.css';
export default class DeleteDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    document.getElementsByClassName('DeleteDialog')[0].style = 'display: none';
  }
  render() {
    return (
      <div className="DeleteDialog">

        <div className="DeleteDialog_Question">
          Удалить n записей?
        </div>

        <button className="DeleteButton" id="delete_button" onClick={this.handleClick}>
          Удалить
                </button>

        <button className="CancelButton" id="cancel_button" onClick={this.handleClick}>
          Отмена
                </button>

      </div>
    );
  }
}