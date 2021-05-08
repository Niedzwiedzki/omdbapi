import styled from "styled-components";
import {colors} from "../../utilities/style-variables";
import {ReactComponent as NoPhoto} from '../../../icons/no-photo.svg';



export const Card = styled.div`
    width: 20rem;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
    background-color: ${colors.white};
    padding: 1rem;
    margin: 2rem;
    cursor: pointer;
    position: relative;
    min-height: 20rem;

    &:hover {
        top: -5px;
        left: -5px;
    }
`

export const NoPhotoIcon = styled(NoPhoto)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  left:50%;
  top: 30px;
  transform: translate(-50%);
`;

export const Wrapper = styled.div`
    position: relative;
`

export const Title = styled.h2``

export const Poster = styled.img`
    width: 100%;
`

export const Year = styled.h3`
    color: ${colors.grey};
    border-bottom: 1px solid ${colors.silver}; 
    margin-bottom: 1rem;
`

