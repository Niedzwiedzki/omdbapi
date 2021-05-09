import React from 'react';
import { Card, Wrapper, Title, Poster, Year, NoPhotoIcon } from './style';
 
interface MovieCardProps {
    title: string,
    year: string,
    id: string,
    poster: string,
    setSelectedMovie: (id: string) => void
  };
  

const MovieCard: React.FC<MovieCardProps>= (props) => {

  let image;
  if(props.poster !== "N/A"){
    image = <Poster src={props.poster}/>
  } else {
    image = <NoPhotoIcon />
  }


  return (
    
      <Card onClick={()=>props.setSelectedMovie(props.id)}>
          <Wrapper>
            <Title>{props.title}</Title>
            <Year> {props.year}</Year>
          </Wrapper>
          <Wrapper>
            {image}
          </Wrapper>
      </Card>
    
  );
}

export default MovieCard;
