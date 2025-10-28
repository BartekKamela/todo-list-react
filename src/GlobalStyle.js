import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        word-break: break-word;
        justify-content: center;
        min-width: 327px;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.color.gallery};
    }
`;