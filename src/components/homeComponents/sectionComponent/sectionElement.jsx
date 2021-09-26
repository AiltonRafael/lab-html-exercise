import styled from "styled-components";

export const Img = styled.img`
    width: 150px;
`

export const DivMain = styled.div`
    display: flex;
    padding: 50px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${props => props.theme.primary};

`