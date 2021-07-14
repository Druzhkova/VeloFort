import ReactLoading from 'react-loading';
import styles from './Loading.module.css';

export const Loading = () => (
  <div className={styles.inner}>
    <ReactLoading type="spokes" color="#323765" height={60} width={60} />
  </div>
);
