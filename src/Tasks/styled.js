import styled, { css } from "styled-components";

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
    border-bottom: 1px solid #dadada;

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
    color: #ffffff;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;

    ${({ done }) => done && css`
        background-color: #008000;

        &:hover {
            background-color: #00ae00;
        }
    `};

    ${({ remove }) => remove && css`
    background-color: #ff0000;

        &:hover {
            background-color: #b80000;
        }
    `};
`;
