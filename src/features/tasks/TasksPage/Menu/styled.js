import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 540px) {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        gap: 15px;
    }
`; 

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