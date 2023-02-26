import styled from "styled-components";

interface INavProps {
    open: boolean;
}

export const Nav = styled.nav<INavProps>`
    @media screen and (max-width: 768px) {
        display: none;
        width: 60%;
        transition: .3s;
    }
    
    max-width: 300px;
    height: 100vh;
    padding: 7rem 0;
    
    border-radius: 0 1rem 1rem 0;
    box-shadow: 5px -1px 11px -2px rgba(0,0,0,0.2);

    background: rgba(255, 255, 255,.010);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    @media screen and (min-width: 468px) {
        width: 40%;
    }

    @media screen and (min-width: 768px) {
        
        position: fixed;
        left: 0;
        top: 0;
    }

    @media screen and (min-width: 968px) {
        width: 20%;
    }
`;

export const List = styled.ul`
    width: 100%;
    padding: 0 .5rem;
`;

export const ListItem = styled.li`
    width: 100%;
    margin-bottom: 1rem;
    padding: .75rem .5rem;
    border-radius: .5rem;
    display: inline-flex;
    align-items: center;
    transition: .3s;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255,.02);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        svg {
            transition: .3s;
            margin-left: .5rem;
        }
    }

    a {
        margin-left: .5rem;
    }

    svg {
        font-size: 1.2rem;

    }
`;