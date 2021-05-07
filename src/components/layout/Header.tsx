import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    padding: 1rem;
`;



const Header: React.FC = () => {

  return (
    <StyledHeader>
        <div>
            {/* <RedditLogo className="header__logo"/> */}
        </div>
        <div>
            <form>
            <div>
                {/* <Options  /> */}
            </div>
            </form>
        </div>
        <div>
            {/* <RedditText className="header__text"/> */}
        </div>
    </StyledHeader>
  );
};

export default Header;