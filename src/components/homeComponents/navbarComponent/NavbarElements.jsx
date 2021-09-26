import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.primary};
    height: 70px;
    padding: 10px;
    font-weight: bold;
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`

export const Img = styled.img`
    height: 20px;
    width: auto;

`

export const Div = styled.div`
    display: flex;
    align-content: center;

`

export const Li = styled.li`
    cursor: pointer;
    &:hover {
        color: #d3c5c5;
    }

`
