import styled from "styled-components";
import {colors} from "../../utilities/style-variables";

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
`

export const Wrapper = styled.div`
    
    /* margin: 0.5rem; */
`

export const Title = styled.h2`
    border-bottom: 1px solid ${colors.silver}; 
    margin-bottom: 1rem;
    position:relative;
`

export const Poster = styled.img.attrs({src: "https://m.media-amazon.com/images/M/MV5BNDg1Zjc4YzktMmRmZi00ZWJmLWJiYzgtYjg3MmE0OTM1NzY5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"})`
    width: 100%;
`

export const Year = styled.span`
    color: ${colors.grey};
    font-size: 1.2rem;
    position: absolute;
    right: 0;
`

