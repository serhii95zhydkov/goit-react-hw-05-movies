import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/moviesApi';

import styles from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  const elements = cast.map(({ id, name, character, profile_path }) => (
    <li key={id} className={styles.item}>
      {profile_path && (
        <img src={`${baseImgUrl}${profile_path}`} alt="profile" width="200" />
      )}
      <p className={styles.text}>
        <b>{name}</b>
      </p>
      <p className={styles.text}>{character}</p>
    </li>
  ));
  return (
    <>
      <ul className={styles.list}>
        {elements.length === 0
          ? "We don't have any cast for this movie"
          : elements}
      </ul>
    </>
  );
};

export default Cast;
