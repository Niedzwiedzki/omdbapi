import React from 'react';
import { Card, Wrapper, Title, Poster, Year, NoPhotoIcon, RouterLink } from './style';
 
interface MovieCardProps {
    title: string,
    year: string,
    id: string,
    poster: string,
  };
  

const MovieCard: React.FC<MovieCardProps>= (props) => {

  let image;
  if(props.poster !== "N/A"){
    image = <Poster src={props.poster}/>
  } else {
    image = <NoPhotoIcon />
  }


  return (
    
      <Card>
        <RouterLink to={`/${props.id}`}>
          <Wrapper>
            <Title>{props.title}</Title>
            <Year> {props.year}</Year>
          </Wrapper>
          <Wrapper>
            {image}
          </Wrapper>
        </RouterLink>
      </Card>
    
  );
}

export default MovieCard;
