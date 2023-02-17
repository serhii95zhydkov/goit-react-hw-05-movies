import { useNavigate, useLocation, Outlet, Link } from 'react-router-dom';

import { useFetchMovie } from 'hooks/useFetchMovie';

const MovieDetails = () => {
  const movie = useFetchMovie();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const navigate = useNavigate();

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <button type="button" onClick={() => navigate(backLinkHref)}>
        Go back
      </button>
      {movie && (
        <section>
          <img src={`${baseImgUrl}${movie.poster_path}`} alt="poster" />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link
                  to={`/movies/${movie.id}/cast`}
                  state={{ from: backLinkHref }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${movie.id}/review`}
                  state={{ from: backLinkHref }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
