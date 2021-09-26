import { createGlobalStyle } from "styled-components";

export const GlobalSettings = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
}

body {
    background-color: tomato;
    font-family: 'Poppins', sans-serif;
}
    
#root {
    width: 100%;
    height: 1000px;
}
`
