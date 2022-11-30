import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${({theme}) => theme.colors.neutral};
        font-family: Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.25rem;
    }

    h5 {
        font-size: 1rem;
    }

    h6 {
        font-size: 0.75rem;
    }

    .appInfo {
        position: fixed;
        top: 0;
    }
`;

export default GlobalStyles;