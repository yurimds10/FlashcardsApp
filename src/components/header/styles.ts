import styled from "styled-components";
import {theme} from "../../global/themes/theme";

export const Header = styled.header`
    width: 100%;
    padding: .5rem 0;
    position: fixed;
    top: 0;
    box-shadow: -1px 9px 19px -2px rgba(0,0,0,0.10);
    
    svg {
        font-size: 2rem;
        cursor: pointer;

        &:hover {
            color: ${theme.colors.secondary};
        }
    }
    
    @media screen  and (min-width: 768px) {
        display: none;    
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`;