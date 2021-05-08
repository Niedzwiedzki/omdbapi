import styled from "styled-components";
import {colors} from "../../utilities/style-variables";
import {ReactComponent as Cancel} from '../../../icons/cancel.svg';
import { Link } from 'react-router-dom';

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
    min-width: 50%;
    position: relative;
`;

export const Wrapper = styled.div`
    border-bottom: 1px solid ${colors.lightGrey};
    margin: 1rem;
`;

export const CloseIcon = styled(Cancel)`
  width: 3rem;
  height: 3rem;

`;


export const Title = styled.h1`
`;

export const Year = styled.p`
`;

export const Poster = styled.img`
    width: 100%;
`
export const RouterLink = styled(Link)`
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
`
