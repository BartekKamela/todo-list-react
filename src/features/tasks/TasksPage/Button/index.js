import styled from "styled-components";

export const Button = styled.button`
    min-width: 167px;
    color: ${({ theme }) => theme.color.teal};
    font-size: smaller;
    border: none;
    cursor: pointer;
    padding-left: 30px;
    padding-right: 20px;
    background-color: transparent;
    transition: 1s;

    &:hover {
        filter: brightness(120%);
        transition: 1s;
    }

    &:disabled {
        cursor: auto;
        filter: none;
        color: ${({ theme }) => theme.color.silver};
    }
`;