import styled from "styled-components";
import magnifyingGlass from '../../../assets/images/magnifying-glass.png'

export const DivSearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.primary};
    height: 70px;
    padding: 10px;
    margin-top: 1px;
`

export const Img = styled.img`
    height: 20px;
    width: auto;
`
export const Input = styled.input`
    width: 150vh;
    height: 50px;
    background-color: ${props => props.theme.bg.quartenary};
    background-image: url(${magnifyingGlass});
    background-position: 1px 10px;
    background-repeat: no-repeat;
    background-size: 30px;
    padding-left:30px;
    border-width: 1px;
`

export const ButtonSearch = styled.button`
    width: ${props => props.theme.button.width};
    background-color: ${props => props.theme.button.bg.primary};
    color: ${props => props.theme.button.color.primary};
    font-weight: bold;
    border-width: 1px;

    &:hover {
        background-color: ${props => props.theme.button.bg.terciary};
        color: ${props => props.theme.button.color.primary};
        cursor: pointer;
        border: none;
    }

`

export const DivButtonSearch = styled.div`
    display: flex;
`

export const ButtonSignUp = styled.button`
    width: 100vh;
    height: 50px;
    width: ${props => props.theme.button.width};
    background-color: ${props => props.theme.button.bg.secundary};
    color: ${props => props.theme.button.color.secundary};
    font-weight: bold;

    &:hover {
        background-color: ${props => props.theme.button.bg.terciary};
        color: ${props => props.theme.button.color.primary};
        cursor: pointer;
        border: none;
    }
`
export const ButtonSignIn = styled.button`
    width: 100vh;
    height: 50px;
    width: ${props => props.theme.button.width};
    background-color: ${props => props.theme.button.bg.secundary};
    color: ${props => props.theme.button.color.secundary};
    font-weight: bold;
    border: none;

    
    &:hover {
        background-color: ${props => props.theme.button.bg.terciary};
        color: ${props => props.theme.button.color.primary};
        cursor: pointer;
        border-width: 1px;
    }


`