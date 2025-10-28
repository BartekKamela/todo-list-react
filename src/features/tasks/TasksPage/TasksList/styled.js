import styled, { css } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const List = styled.ul`
    list-style-type: none;
    padding: 10px 0;
    width: 100%;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: 30px auto 30px;
    align-items: center;
    grid-gap: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `} 
`;

export const Content = styled.span`
    margin-right: 10px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: filter 0.3s;

    ${({ done }) => done && css`
        background-color: ${({ theme }) => theme.color.forestGreen};

        &:hover {
            filter: brightness(120%);
        }
    `};

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};

        &:hover {
            filter: brightness(120%);
        }
    `};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.teal};

    &:hover {
        filter: brightness(120%);
    }
    &:active {
        filter: brightness(130%);
    }
`;
