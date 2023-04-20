import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
`; 

export const Button = styled.button`
    min-width: 167px;
    color: #008080;
    font-size: smaller;
    border: none;
    cursor: pointer;
    padding-left: 30px;
    padding-right: 20px;
    background-color: transparent;
    transition: 1s;

    &:hover {
        color: #00dfdf;
        transition: 1s;
    }

    &:disabled {
        color: #b5b5b5;
        cursor: auto;
    }

    @media (max-width: 540px) {
        flex-direction: column;
        margin-top: 15px;
        gap: 15px;
    }
`;