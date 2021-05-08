import styled from "styled-components";
import {ReactComponent as MovieIcon} from '../../../icons/movie-reel-cinema-tool.svg';
import {colors} from "../../utilities/style-variables";


interface HeaderProps {
    central?: boolean
}

export const StyledHeader = styled.header`
    display: flex;
    padding: 2rem;
    justify-content: space-between;
    background-color: ${colors.lightGrey}
`;

export const StyledMovieIcon = styled(MovieIcon)`
  width: 3rem;
  height: 3rem;
`;

export const Wrapper = styled.div<HeaderProps>`
    flex: ${props => (props.central ? 1 : 0)};
    display: flex;
    justify-content: center;
`;