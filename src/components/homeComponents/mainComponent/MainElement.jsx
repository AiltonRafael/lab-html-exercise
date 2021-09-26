import styled from 'styled-components';

export const PlansButton = styled.button`
    height: 50px;
    width: 200px;
    background-color: ${props => props.theme.button.bg.last};
    border: none;
    border-radius: 20px;
    box-shadow: 1px 2px #000000;
    font-size: 1em;
    font-weight: bold;

    &:hover {
        background-color: ${props => props.theme.button.bg.terciary};
        color: ${props => props.theme.button.color.primary};
        cursor: pointer;
        border: none;
    }
`
export const JoinButton = styled.button`
    height: 50px;
    width: 200px;
    background-color: ${props => props.theme.button.bg.quartenary};
    color: ${props => props.theme.primary};
    border: none;
    border-radius: 20px;
    box-shadow: 1px 2px #000000;
    font-size: 1em;
    font-weight: bold;
   
    &:hover {
        background-color: ${props => props.theme.button.bg.terciary};
        color: ${props => props.theme.button.color.primary};
        cursor: pointer;
        border: none;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, #ac1a1a, #e45a3b, #f15a52);
    align-content: center;
    align-items: center;
    text-align: center;
    color: ${props => props.theme.primary};
    font-size: 20px;
    padding: 50px;
`
export const DivButton = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
`