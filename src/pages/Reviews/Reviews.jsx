import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/moviesApi';

import styles from './reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      <ul className={styles.list}>
        {elements.length === 0
          ? "We don't have any reviews for this movie"
          : elements}
      </ul>
    </>
  );
};

export default Reviews;
