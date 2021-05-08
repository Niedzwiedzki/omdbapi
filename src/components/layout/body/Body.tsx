import React, {useState} from 'react';
import MovieCard from '../../elements/movieCard/MovieCard';
import { Background } from './style';

const App: React.FC = () => {
  
    return (
        <Background>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </Background>
        
    );
  }
  
  export default App;
  