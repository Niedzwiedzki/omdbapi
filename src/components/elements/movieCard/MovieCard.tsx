import React from 'react';
import { Card, Wrapper, Title, Poster, Year } from './style';
 
 

const MovieCard: React.FC= (props) => {
  return (
      <Card>
          <Wrapper>
            <Title>Titanic<Year> 1997</Year></Title>
          </Wrapper>
          <Wrapper>
            <Poster/>
          </Wrapper>
      </Card>
  );
}

export default MovieCard;
