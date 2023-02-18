import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesApi';

import { Notify } from 'notiflix';
import Loader from 'components/Loader/Loader';

import styles from './trendingList.module.css';

const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  const elements = trendingMovies.map(({ title, id, poster_path }) => {
    return (
      <li key={id}>
        <Link
          className={styles.link}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
          <div className={styles.container}>
            <img src={`${baseImgUrl}${poster_path}`} alt={title} width={220} />
            <p className={styles.text}>{title}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.list}>
        {loading && <Loader />}
        {error
          ? Notify.failure('Oop! Something went wrong! Try again later!')
          : elements}
      </ul>
    </>
  );
};

export default TrendingList;
