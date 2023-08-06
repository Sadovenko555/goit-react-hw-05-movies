import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieAPI from "services/fetchAPI";
import { MoviesContainer, SearchBoxContainer, MoviesList, NoResultsMessage } from './Movies.styled';
import { SearchBox } from "components/SearchBox/SearchBox";
import { MoviesByQuery } from "components/MoviesByQuery/MoviesByQuery";

const movieAPI = new MovieAPI();

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("title") ?? "";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const searchMovies = async () => {
            try {
                if (movieName.trim() !== "") {
                    const data = await movieAPI.movieByQuery(movieName);
                    setMovies(data.results);
                } else {
                    setMovies([]);
                }
            } catch (error) {
                console.log("Error searching movies:", error);
            }
        };
        searchMovies();
    }, [movieName]);

    const updateQueryString = (value) => {
        const nextParams = value !== "" ? { title: value } : {};
        setSearchParams(nextParams);
    };

    return (
        <MoviesContainer>
            <SearchBoxContainer>
                <SearchBox value={movieName} onChange={updateQueryString} />
            </SearchBoxContainer>
            {movies.length > 0 ? (
                <MoviesList>
                    <MoviesByQuery movies={movies} />
                </MoviesList>
            ) : (
                <NoResultsMessage>No movies found.</NoResultsMessage>
            )}
        </MoviesContainer>
    );
};

export default Movies;
