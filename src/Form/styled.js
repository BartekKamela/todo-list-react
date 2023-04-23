import styled from "styled-components";


export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: auto 150px;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-wrap: wrap;
    }  
`;

export const Input = styled.input`
    padding: 7px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        margin-bottom: -5px;
    }
`;

export const Button = styled.button`
    padding: 9px;
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    transition: 1s;
    transform: scale(1);

    &:hover {
        filter: brightness(120%);
        transition: 1s;
        transform: scale(1.04);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
    }
`;