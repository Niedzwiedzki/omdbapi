import React from 'react';

import Input from '../../elements/input/Input';
import { StyledHeader, StyledMovieIcon, Wrapper, Title } from './style';


interface HeaderProps {
  value: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const Header: React.FC<HeaderProps> = (props) => {

  return (
    <StyledHeader >
        <Wrapper>
            <StyledMovieIcon/>
        </Wrapper>
        <Wrapper central={true}>
                <Input value={props.value} inputHandler={props.inputHandler} />
        </Wrapper>
        <Wrapper>
          <Title>OMDB API</Title>
        </Wrapper>
    </StyledHeader>
  );
};

export default Header;