import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    console.log(movieId);
    useEffect(() => {
        get(`/movie/${movieId}?api_key=f6137efa514fa2ea34c8d2237d45116d`).then(data => setMovie(data))
    }, [movieId]);

    if(!movie) {
        return null;
    }

    const imgUrl = 'https://image.tmdb.org/t/p/w500'+movie.poster_path;

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imgUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p><strong>Title:</strong> {movie.title} </p>
                <p><strong>Description:</strong>  {movie.overview} </p>
                <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ') } </p>
            </div>
        </div>
    )
}