import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        color: ${props => props.theme['green-700']};
    }

    nav {
        display: flex;
        gap: .5rem; 

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${props => props.theme['gray-100']};

            /* the reason for thses borders are when the hover happens so that it doesn't 
            move the icon up */
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover {
                border-bottom: 3px solid ${props => props.theme['green-500']};
            }

            &.active {
                color: ${props => props.theme['green-500']};
            }
        }
    }
`