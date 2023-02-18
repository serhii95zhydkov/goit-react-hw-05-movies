import { useLocation, Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './moviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  const elements = movies.map(({ title, id, poster_path }) => {
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
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
