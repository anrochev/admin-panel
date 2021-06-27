import propTypes from 'prop-types'
import { CheckBox } from 'components/CheckBox/CheckBox'
import styles from 'components/TOrders/THeader/TableHeaderColumnWithCheckBox.module.css'

export function TableHeaderColumnWithCheckBox ({ onChange, checked }) {
 
  return (
    <div className={styles.tableColumnItem}>
      <div className={styles.checkBox}>
        <CheckBox
          onChange={onChange}
          checked = {checked}           
        />
      </div>
    </div>
  )
}

TableHeaderColumnWithCheckBox.propTypes = {
  onChange: propTypes.func
}

TableHeaderColumnWithCheckBox.defaultProps = {
  onChange: () => {}
}
