import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import MovieAPI from "services/fetchAPI";
import { ReviewsContainer } from './Reviews.styled';

const movieAPI = new MovieAPI()

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviewsById = async () => {
            try {
                const resp = await movieAPI.ReviewsById(movieId);
                if (resp.results.length === 0) {
                    setReviews([]);
                } else {
                    setReviews(resp.results);
                }
            } catch (error) {
                console.log("Error searching movies:", error);
            }
        };

        getReviewsById();
    }, [movieId]);

    return (
        <ReviewsContainer>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <p className="author">Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </ReviewsContainer>
    )
}

export default Reviews;
