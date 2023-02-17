import { useLocation, Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ title, id }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};

export default MoviesList;
