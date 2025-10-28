import styled from "styled-components";

export default styled.input`
    padding: 7px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        margin-bottom: -5px;
    }
`;
