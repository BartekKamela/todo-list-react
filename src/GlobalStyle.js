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
        max-width: 900px;
        min-width: 327px;
        margin: 0 auto;
        background-color: #ececec;
    }
`;