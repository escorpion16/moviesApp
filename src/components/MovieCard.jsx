import React from 'react'
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export const MovieCard = ({ movie }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
                <img 
                    width={230}
                    height={345}
                    className={styles.movieImage} 
                    src={imgUrl} 
                    alt={movie.title} 
                />
                <div>{movie.title}</div>
            </Link>
        </li>
    )
}