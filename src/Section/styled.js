import styled from "styled-components";

export const Wrapper = styled.section`
    box-shadow: 0px 0px 5px -2px rgb(151 151 151 / 82%);
    margin: 10px 0px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 0px;
    padding: 15px;
    border: 1px solid #dadada;
    background-color: white;

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }
`;

export const HeaderTitle = styled.h2`
    margin: 0px;
    min-width: 145px;
`;

export const Content = styled.div`
    padding: 15px;
    border: 1px solid #dadada;
    background-color: white;
`;