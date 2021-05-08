import React from 'react';

import Input from '../../elements/input/Input';
import { StyledHeader, StyledMovieIcon, Wrapper } from './style';




const Header: React.FC = () => {

  return (
    <StyledHeader >
        <Wrapper>
            <StyledMovieIcon/>
        </Wrapper>
        <Wrapper central={true}>
                <Input />
                {/* <Options  /> */}
        </Wrapper>
        <Wrapper>
           OMDBAPI
        </Wrapper>
    </StyledHeader>
  );
};

export default Header;