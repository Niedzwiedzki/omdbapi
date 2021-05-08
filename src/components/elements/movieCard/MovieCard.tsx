import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Wrapper, Title, Poster, Year, NoPhotoIcon } from './style';
 
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
    <Link to={`/${props.id}`}>
      <Card>
          <Wrapper>
            <Title>{props.title}</Title>
            <Year> {props.year}</Year>
          </Wrapper>
          <Wrapper>
            {image}
          </Wrapper>
      </Card>
    </Link>
  );
}

export default MovieCard;
