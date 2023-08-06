import PropTypes from 'prop-types';
import { MovieInfoContainer, MovieDetails, MovieTitle, UserScore, OverviewTitle, GenresTitle, GenresList } from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
    if (!movie) {
        return null;
    }

    const { vote_average, genres, poster_path, title, name, overview } = movie;

    const persentageRate = Math.round((vote_average / 10) * 100);

    const img = poster_path
        ? `https://image.tmdb.org/t/p/w342/${poster_path}`
        : "";

    const movieGenres = genres && genres.length >= 1
        ? genres.map(genre => genre.name).join(', ')
        : 'No genres';

    return (
        <MovieInfoContainer>
            <img src={img} alt={title} />
            <MovieDetails>
                <MovieTitle>{title || name}</MovieTitle>
                <UserScore>User Score: {persentageRate}%</UserScore>
                <OverviewTitle>Owerview</OverviewTitle>
                <p>{overview}</p>
                <GenresTitle>Genres</GenresTitle>
                <GenresList>{movieGenres}</GenresList>
            </MovieDetails>
        </MovieInfoContainer>
    );
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfo;
