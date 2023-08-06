import React, { useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { MovieDetailsContainer, BackLink, LinksList, NavLink } from './MovieDetails.styled';
import MovieAPI from "services/fetchAPI";

const movieAPI = new MovieAPI();

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const backBtn = location.state?.from ?? '/';

    useEffect(() => {
        getMovieById(movieId);
    }, [movieId]);

    const getMovieById = async (movieId) => {
        try {
            const resp = await movieAPI.MovieById(movieId);
            setMovie(resp);
        } catch (error) {
            console.log("Error searching movies:", error);
        }
    };

    return (
        <MovieDetailsContainer>
            <BackLink to={backBtn}>Back to movies</BackLink>
            <MovieInfo movie={movie} />
            <LinksList>
                <li>
                    <NavLink to="cast" state={{ from: backBtn }}>
                        Cast
                    </NavLink>
                </li>
                <li>
                    <NavLink to="reviews" state={{ from: backBtn }}>
                        Reviews
                    </NavLink>
                </li>
            </LinksList>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </MovieDetailsContainer>
    );
};

export default MovieDetails;
