import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from 'services/moviesApi';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  console.log(useParams());

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, [id]);

  console.log(movie);
  return movie;
};
