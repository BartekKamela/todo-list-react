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
