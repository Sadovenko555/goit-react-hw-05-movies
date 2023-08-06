import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { MoviesContainer, NoMoviesMessage } from './MoviesByQuery.styled';

export const MoviesByQuery = ({ movies }) => {
    const location = useLocation();

    if (!movies || movies.length === 0) {
        return <NoMoviesMessage>Start searching for movies</NoMoviesMessage>;
    }

    return (
        <MoviesContainer>
            <ul>
                {movies.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                    </li>
                ))}
            </ul>
        </MoviesContainer>
    )
}

MoviesByQuery.propTypes = {
    movies: PropTypes.array.isRequired,
}
