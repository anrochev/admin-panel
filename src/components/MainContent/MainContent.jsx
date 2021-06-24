import styles from './MainContent.module.css';
import { Header } from 'components/Header/Header';
import { Filter } from 'components/Filter/Filter';
import { FilterExtended } from 'components/FilterExtended/FilterExtended';
import { TOrders } from 'components/TOrders/TOrders';

export function MainContent() {

  return (
    <div className={styles._}>
      <Header />
      <Filter />
      <FilterExtended />
      <TOrders />
    </div>
  );
}