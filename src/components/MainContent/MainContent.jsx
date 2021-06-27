import styles from './MainContent.module.css';
import { Header } from 'components/Header/Header';
import { Filter } from 'components/Filter/Filter';
import { FilterExtended } from 'components/FilterExtended/FilterExtended';
import { TOrders } from 'components/TOrders/TOrders';
import { useSelector } from 'react-redux'

export function MainContent() {
  const visibleFilter = useSelector((state) => state.ui.filterVisile)
  return (
    <div className={styles._}>
      <Header />
      <Filter />
      <FilterExtended visible={visibleFilter}/>
      <TOrders />
    </div>
  );
}