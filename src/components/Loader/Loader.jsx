import { RotatingLines } from "react-loader-spinner"; 

import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines />
    </div>
  );
};

export default Loader;