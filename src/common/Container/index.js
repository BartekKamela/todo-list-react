import styled from "styled-components";

const  Main = styled.main`
    margin: 50px 20px 20px 20px;
`;

const Container = ({ children }) => (
    <Main>
        {children}
    </Main>
);

export default Container;