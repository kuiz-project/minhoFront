import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { fonts } from "../assets/fonts/fonts";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${fonts}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        font-family: "Noto Sans KR_Regular", 'sans-serif';
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        margin-bottom: 100px;
    }
    ol, ul{
        list-style: none;
    }
    button {
        padding:0;
        margin:0;
        border: 0;
          font-family: "Noto Sans KR_Regular", 'sans-serif';
        background: transparent;
        cursor: pointer;
    }
      :focus {
        outline: none;
        border: none;
    }
`;

export default GlobalStyles;
