import styled from "styled-components";

export const Img = styled.img`
    height: 50px;
    width: auto;
    filter: invert(1);
`

export const DivIcon = styled.div`
    display: flex;
    flex-direction: column;
`

export const ButtonCreatOrg = styled.button`
    width: 200px;
    height: 50px;
    background-color: ${props => props.theme.secundary};
    color: ${props => props.theme.primary};
    font-size: 20px;

    &:hover {
        background-color: ${props => props.theme.button.bg.terciary};
        color: ${props => props.theme.button.color.primary};
        cursor: pointer;
        border: none;
    }
`

export const DivMain = styled.div`
    background-image: linear-gradient(to right, #ac1a1a, #e45a3b, #f15a52);
    padding: 60px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
`

export const DivIconFlex = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 150px;
    color: ${props => props.theme.primary}
`    