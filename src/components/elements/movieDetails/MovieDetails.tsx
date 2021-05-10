import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { 
    StyledMovieDetailes, 
    MovieDetailesContainer, 
    Wrapper, 
    CloseIcon, 
    Title,  
    Poster, 
    DataContainer, 
    NoPhotoIcon, 
    Data, 
    Value,
    Column,
    Header,
    DataAndYear
} from './style';
import CircularProgress from '@material-ui/core/CircularProgress';
 
interface MovieData {
    Title?: string,
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
    Website?: string
}

interface MovieDetailsProps {
    movieId: string | boolean,
    setSelectedMovie: () => void
}

const MovieDetails: React.FC<MovieDetailsProps> = (props) => {
    const [movie, setMovie] = useState<MovieData>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.omdbapi.com/?i=${props.movieId}&apikey=3a542246`)
        .then(function (response) {
            setMovie(response.data) 
            setLoading(false)    
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false) 
        })
    
    }, [props.movieId])  
    
    let image;
    if(loading){
        image = <CircularProgress />
    } else {
        if(movie.Poster !== "N/A"){
        image = <Poster src={movie.Poster}/>
        } else {
        image = <NoPhotoIcon />
        }
    }

    function close (e: React.MouseEvent<HTMLElement>) {
        if(e.target === e.currentTarget){
            props.setSelectedMovie()
        }
        
    }

  return (
      <StyledMovieDetailes onClick={close}>
          <MovieDetailesContainer>
              
            <Wrapper>
                <Header>
                    <DataAndYear>
                        <Title>{movie.Title}</Title>
                        <Value>{movie.Year}</Value>
                    </DataAndYear>
                    <CloseIcon onClick={props.setSelectedMovie}/>
                </Header>
            </Wrapper>
            <DataContainer>
            <Column>
                <Wrapper image={true}>
                    {image}
                </Wrapper>
            </Column>
            <Column>
                <Wrapper>
                    <Data>Director:</Data>
                    <Value>{movie.Director}</Value>
                </Wrapper>
                <Wrapper>
                    <Data>Writer:</Data>
                    <Value>{movie.Writer}</Value>
                </Wrapper>
                <Wrapper>
                    <Data>Cast:</Data>
                    <Value>{movie.Actors}</Value>
                </Wrapper>
                <Wrapper>
                    <Data>Plot:</Data>
                    <Value>{movie.Plot}</Value>
                </Wrapper>
                <Wrapper>
                    <Data>Country:</Data>
                    <Value>{movie.Country}</Value>
                </Wrapper>
                <Wrapper>
                    <Data>Awards:</Data>
                    <Value>{movie.Awards}</Value>
                </Wrapper>
                <Wrapper>
                    <Data>Rated:</Data>
                    <Value>{movie.Rated}</Value>
                </Wrapper>
            </Column>
            </DataContainer>
          </MovieDetailesContainer>
      </StyledMovieDetailes>

  );
}

export default MovieDetails;
