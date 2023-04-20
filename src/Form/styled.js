import styled from "styled-components";


export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: auto 150px;
    grid-gap: 20px;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
    }  
`;

export const Input = styled.input`
    padding: 7px;

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: -5px;
    }
`;

export const Button = styled.button`
    padding: 9px;
    border: none;
    background-color: #008080;
    color: white;
    cursor: pointer;
    transition: 1s;
    transform: scale(1);

    &:hover {
        background-color: #009c9c;
        transition: 1s;
        transform: scale(1.04);
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;