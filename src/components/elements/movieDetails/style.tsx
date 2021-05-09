import styled from "styled-components";
import {colors} from "../../utilities/style-variables";
import {ReactComponent as Cancel} from '../../../icons/cancel.svg';
import {ReactComponent as NoPhoto} from '../../../icons/no-photo.svg';
import { Link } from 'react-router-dom';

interface WrapperProps {
    image?: boolean
}

export const StyledMovieDetailes = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.transparentGrey};
    padding: 1rem;
    min-height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MovieDetailesContainer = styled.div`
    background-color: ${colors.lightGrey};
    width: 50%;
    max-height: 100vh;
    position: relative;
    overflow-y: scroll;
    @media (max-width: 900px) {
        width: 80%;
    }
`;

export const Wrapper = styled.div<WrapperProps>`
    border-bottom: 1px solid ${colors.black};
    margin: 1rem;
    padding-bottom: 0.5rem;
    min-height: ${props => (props.image ? "20rem" : 0)};
    display: ${props => (props.image ? "flex" : "block")};
    justify-content: center;
    align-items: center;
`;

export const CloseIcon = styled(Cancel)`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  transition: all .2;

  &:hover{
    width: 3.2rem;
    height: 3.2rem; 
    margin: 0.9rem;
  }
`;


export const Title = styled.h1`
`;

export const Poster = styled.img`
    width: 100%;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`
export const RouterLink = styled(Link)`

`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    flex: 1
`

export const NoPhotoIcon = styled(NoPhoto)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  left:50%;
  top: 30px;
  transform: translate(-50%);

`;

export const DataAndYear = styled.div`
  display: flex;
  flex-direction: column;
`

export const Data = styled.h2`

`

export const Value = styled.p`

`


