import { NavLink } from 'react-router-dom';

import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink className={styles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
