import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { get } from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    console.log(movieId);
    useEffect(() => {
        setIsLoading(true);

        get(`/movie/${movieId}?api_key=f6137efa514fa2ea34c8d2237d45116d`).then(data => {
            setIsLoading(false)
            setMovie(data)
        })
    }, [movieId]);

    if(isLoading){
        return <Spinner />
    }

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