import styled from "styled-components";
import {colors} from "../../utilities/style-variables";


export const StyledInput = styled.input`
    width: 50%;
    border-radius: 0.5rem;
    border-width:1px;
    border-style: solid;
    border-color: ${colors.lightGrey};
    transition: width 0.2s;

    &:hover {
        border-color: ${colors.lightBlue};
    }

    &:focus {
        width: 60%;
        outline: none;
    }
`;
