import React from 'react'
// import {MoviesGrid} from './components/MoviesGrid';
// import styles from './App.module.css';
import { MovieDetails } from './pages/MovieDetails';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { LandingPages } from './pages/LandingPage';

export const App = () => {
  return( 
    <Router>
      <header> 
        {/* <h1 className={styles.title}>Movies</h1>  */}
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
      </ header>
      <main> 
        <Switch>
          <Route exact path="/movie"><MovieDetails /></Route>
          <Route path="/"><LandingPages/></Route>
        </Switch>
      </main>
    </Router>
  )
}
 