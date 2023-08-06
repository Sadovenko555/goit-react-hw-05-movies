import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { MovieCard, MovieImage, MovieTitle, MoviesGrid } from './AllMoviesList.styled';

export const AllMoviesList = ({ movies }) => {
    return (
        <MoviesGrid>
            {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
                    <MovieCard>
                        <MovieImage
                            src={movie.poster_path}
                            alt={movie.title || movie.name}
                        />
                        <MovieTitle>{movie.title || movie.name}</MovieTitle>
                    </MovieCard>
                </Link>
            ))}
        </MoviesGrid>
    )
}

AllMoviesList.propTypes = {
    movies: PropTypes.array.isRequired
}
