import { createGlobalStyle } from "styled-components";

import { theme } from "../themes/theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Open Sans", sans-serif;
        background: ${theme.colors.backgroundColor};
    }

    div, span, a, p, h1, h2, h3 {
        color: ${theme.colors.textColor};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        border: none;
        outline: none;
    }
`;