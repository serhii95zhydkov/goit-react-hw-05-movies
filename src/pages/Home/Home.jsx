import TrendingList from 'components/TrendingList/TrendingList';

import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      <TrendingList />
    </>
  );
};

export default Home;
