import React, { useEffect, useState } from 'react'
import { useQuery } from '../hooks/useQuery';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';

export const MoviesGrid = () => {
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get('search');
    console.log(search);

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
            ? `/search/movie?api_key=f6137efa514fa2ea34c8d2237d45116d&query=${search}`
            : '/discover/movie?api_key=f6137efa514fa2ea34c8d2237d45116d'
        get(searchUrl) 
        .then(data => {
            setMovies(data.results)
            setIsLoading(false)
        })
    },[search])


    if(isLoading) {
        return <Spinner />
    }
    return (   
        <ul className={styles.moviesGrid}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </ul>   
    )
}
