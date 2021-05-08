import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StyledMovieDetailes, MovieDetailesContainer, Wrapper, CloseIcon, Title, Year, Poster, RouterLink } from './style';
import { useParams } from 'react-router-dom';
 
interface ParamsObj {
    id: string
}

interface MovieData {
    Title?: string
    Year?: string,
    Rated?: string,
    Released?: string,
    Runtime?: string,
    Genre?: string,
    Director?: string,
    Writer?: string,
    Actors?: string,
    Plot?: string,
    Language?: string,
    Country?: string,
    Awards?: string,
    Poster?: string,
    Ratings?: string,
    Metascore?: string,
    imdbRating?: string,
    imdbVotes?: string,
    imdbID?: string,
    Type?: string,
    DVD?: string,
    BoxOffice?: string,
    Production?: string,
    Website?: string,
}

const MovieDetails: React.FC= () => {
    const [movie, setMovie] = useState<MovieData>({});
    const params: ParamsObj = useParams();

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${params.id}&apikey=3a542246`)
        .then(function (response) {
            setMovie(response.data)     
        })
        .catch(function (error) {
          console.log(error);
        })
    
    }, [params.id])    

  return (
      <StyledMovieDetailes>
          <MovieDetailesContainer>
              <RouterLink to="/"><CloseIcon/></RouterLink>
            <Wrapper>
                <Title>{movie.Title}</Title>
                <Year>{movie.Year}</Year>
            </Wrapper>
          </MovieDetailesContainer>
      </StyledMovieDetailes>

  );
}

export default MovieDetails;
