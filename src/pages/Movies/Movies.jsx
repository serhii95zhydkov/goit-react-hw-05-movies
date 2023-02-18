import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getQueryMovies } from 'services/moviesApi';

import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';

import MoviesList from 'components/MoviesList/MoviesList';

import styles from './movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search === '' || search === null) {
      return;
    }

    const fetchQueryMovies = async () => {
      try {
        setLoading(true);
        const data = await getQueryMovies(search);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchQueryMovies();
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="search"
          required
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      {loading && <Loader />}
      {error
        ? Notify.failure('Oop! Something went wrong! Try again later!')
        : movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
