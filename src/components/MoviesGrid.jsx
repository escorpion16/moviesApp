import React, { useEffect, useState } from 'react'
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';

export const MoviesGrid = () => {
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        get('/discover/movie?api_key=f6137efa514fa2ea34c8d2237d45116d')
        .then(data => {
            setMovies(data.results)
            setIsLoading(false)
        })
    },[])


    if(isLoading) {
        return <Spinner />
    }
    return (   
        <ul className={styles.moviesGrid}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </ul>   
    )
}
