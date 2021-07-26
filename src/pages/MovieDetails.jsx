import movie from './movie.json';
import styles from './MovieDetails.module.css';
export const MovieDetails = () => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;

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