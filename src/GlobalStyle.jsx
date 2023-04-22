import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        
    }
    body {
        font-family: 'Montserrat','Noto Sans KR', sans-serif;
        font-weight:400;
        line-height: 1.5;
        background-color:#dde3e7;
        padding:30px;
    }
    ol{
        list-style:none;
        display:flex;
        gap: 10px;
        margin-bottom:30px;
        padding:0;
    }
    button{
        font-family: 'Montserrat','Noto Sans KR', sans-serif;
        font-weight:500;
    }
    input{
        font-family: 'Montserrat','Noto Sans KR', sans-serif;
    }
    select{
        font-family: 'Montserrat','Noto Sans KR', sans-serif;
        font-weight:500;
    }
    label{
        font-weight:500
    }
`;


export default GlobalStyle;