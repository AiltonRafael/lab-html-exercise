import React from 'react';
import { Nav, Ul, Img, Div, Li } from './NavbarElements';
import logoHeart from '../../../assets/images/black-heart.png'

export const NavbarComponents = () => {
    return (
        <Nav>
                <Div> 
                    <Img src={logoHeart} id='logoNavbar'/>
                    <span id='textNavbar'> Nuclear Powered Mushroom </span>
                </Div>
                <Ul> 
                    <Li> Produtos </Li>
                    <Li> Pricing </Li>
                    <Li> Documentation </Li>
                    <Li> Community </Li>
                </Ul>
        </Nav>
    )
}
