import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesApi';

import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';

const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

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

  const elements = trendingMovies.map(({ title, id }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
      </li>
    );
  });

  return (
    <>
      <ul>
        {loading && <Loader />}
        {error
          ? Notify.failure('Oop! Something went wrong! Try again later!')
          : elements}
      </ul>
    </>
  );
};

export default TrendingList;
