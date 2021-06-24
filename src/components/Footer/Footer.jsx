import React, { useState } from 'react';
import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { Pagination } from 'components/Pagination/Pagination'
import { ChangeStatusButton } from 'components/ChangeStatusButton/ChangeStatusButton'
import { ChangeStatusButtonMenu } from 'components/ChangeStatusButton/ChangeStatusButtonMenu'
import { DeleteButton } from 'components//DeleteButton/DeleteButton'
import { DeleteButtonMenu } from 'components//DeleteButton/DeleteButtonMenu'
import { useDispatch } from 'react-redux'
import { orderDelete, orderChangeStatus } from 'features/Orders/ordersSlice'

export function Footer({
  onPageChanged,
  totalRecords,
  isNeedRefreshPage,
}) {
  const dispatch = useDispatch()
  const [deleteClicked, setDeleteClicked] = useState(false)
  const [changeStatusClicked, setChangeStatusClicked] = useState(false)


  const onChangeStatusClick = () => {
    setChangeStatusClicked(!changeStatusClicked)
  }
  const onChangeStatusMenuSelect = (value) => {
    setChangeStatusClicked(false)
   
   if (value) {
     dispatch(orderChangeStatus(value));
   }
  }

  const onDeleteButtonClick = () => {
    setDeleteClicked(true)
  }
  const onDeleteMenuSelect = (value) => {
    setDeleteClicked(false)
    if (value) {
      
      dispatch(orderDelete())
    }
  }

  const selectedRowCount = useSelector((state) => state.orders.selectedOrdersCount);

  return (
    <div className={styles._}>
      <div className={styles.Selected}>
        <div className={styles.SelectedNumber}>
          {`Выбрано записей: ${selectedRowCount}`}
        </div>

        <div className={styles.menu}>
          <ChangeStatusButtonMenu
            isShow={changeStatusClicked}
            onMenuItemSelect={onChangeStatusMenuSelect}
          />
          <ChangeStatusButton
            onClick={onChangeStatusClick}
          />
        </div>

        <div className={styles.menu}>
          <DeleteButtonMenu
            recordsCount={selectedRowCount}
            isShow={deleteClicked}
            onMenuItemSelect={onDeleteMenuSelect}
          />
          <DeleteButton
            onClick={onDeleteButtonClick}
          />
        </div>

      </div>
      <Pagination
        totalRecords={totalRecords}
        onPageChanged={onPageChanged}
        pageLimit={11}
        pageNeighbours={2}
        isNeedRefreshPage={isNeedRefreshPage}
      />
     
    </div>
  );
}