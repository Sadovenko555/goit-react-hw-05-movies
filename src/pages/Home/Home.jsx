import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomeContainer, TrendingTitle, MoviesContainer, ErrorMessage } from './Home.styled';
import { AllMoviesList } from "components/AllMoviesList/AllMoviesList";
import MovieAPI from "services/fetchAPI";

const movieAPI = new MovieAPI();

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
       fetchTrendsMovies();
    }, []);

    const fetchTrendsMovies = async () => {
        try {
            const data = await movieAPI.fetchTrendsMovies();
            const moviesWithPosters = data.results.map(movie => ({
                ...movie,
                poster_path: `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
            }));
            setMovies(moviesWithPosters);
            setError(null);
        } catch (error) {
            setError("Error fetching movies");
        }
    } 

    return (
        <HomeContainer>
            <TrendingTitle>Trending today</TrendingTitle>
            {error ? (
                <ErrorMessage>{error}</ErrorMessage>
            ) : (
                <MoviesContainer>
                    <AllMoviesList movies={movies} state={{ from: location }} />
                </MoviesContainer>
            )}
        </HomeContainer>
    )
}

export default Home;
