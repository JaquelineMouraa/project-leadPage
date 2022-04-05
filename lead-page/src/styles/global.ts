import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --gray: #818181;
        --grayLigth: #eceeef;
        --navy: #202646;
        --orange: #ff3f19;
    }

    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea,button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
    }

    strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
