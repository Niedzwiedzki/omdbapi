import React from 'react';
import MovieCard from '../../elements/movieCard/MovieCard';
import MovieDetails from '../../elements/movieDetails/MovieDetails';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Background, NoResults } from './style';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

interface BodyProps {
    movies: { 
        "Title": string,
        "Year": string,
        "imdbID": string,
        "type": string,
        "Poster": string
        
     }[];
    loading: boolean
  };

const App: React.FC<BodyProps> = (props) => {
  
    let movies;

    if(props.loading){
        movies = <CircularProgress />  
    } else {
        if(props.movies.length){
            movies = props.movies.map(movie => {
                return <MovieCard title={movie.Title} year={movie.Year} id={movie.imdbID} poster={movie.Poster}/>
            })
        } else {
            movies = <NoResults>No results found</NoResults>
        }
    }



    return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Background>
                    {movies}
                </Background>
            </Route>
            <Route exact path="/:id">
                <MovieDetails {...props}/>
            </Route>
        </Switch>
    </Router>       
    );
  }
  
  export default App;
  