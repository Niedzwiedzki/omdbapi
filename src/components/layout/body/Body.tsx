import React, {useState} from 'react';
import MovieCard from '../../elements/movieCard/MovieCard';
import MovieDetails from '../../elements/movieDetails/MovieDetails';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Background, NoResults } from './style';

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

    const [selectedMovie, setSelectedMovie] = useState<boolean | string>(false)
  
    let movies;

    if(props.loading){
        movies = <CircularProgress />  
    } else {
        if(props.movies.length){
            movies = props.movies.map(movie => {
                return <MovieCard key={movie.imdbID} title={movie.Title} year={movie.Year} id={movie.imdbID} poster={movie.Poster} setSelectedMovie={(id) => setSelectedMovie(id)}/>
            })
        } else {
            movies = <NoResults>No results found</NoResults>
        }
    }

    let content;
    if(selectedMovie) {
        content = <MovieDetails movieId={selectedMovie} setSelectedMovie={() => setSelectedMovie(false)}/>
    } else {
        content = <Background>{movies}</Background>
    }

    return (
        content
    );
  }
  
  export default App;
  