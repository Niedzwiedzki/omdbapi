import React from 'react';
import MovieCard from '../../elements/movieCard/MovieCard';
import MovieDetails from '../../elements/movieDetails/MovieDetails';
import { Background } from './style';
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
  };

const App: React.FC<BodyProps> = (props) => {
  
    return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Background>
                    {props.movies.map(movie => {
                        return <MovieCard title={movie.Title} year={movie.Year} id={movie.imdbID} poster={movie.Poster}/>
                    })}
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
  