import React from 'react';
import { Img, DivMain } from './sectionElement' 
import triangleHexagon from '../../../assets/images/triangle-hexagon.png';

export const SectionComponent = () => {
    return (
        <DivMain>
            <Img src={triangleHexagon} alt='bgHexa'/>
            <h1> 
                Bring the best of open <bn /> 
                source to you, your team, <br /> 
                and your company
            </h1>
            <div> 
                Relied upon by more than 11 million developers worldwide, npm is <br />
                committed to making JavaScript development elegant, productive, and <br />
                safe. The free npm Registry has become the center of JavaScript code <br /> 
                sharing, and with more than one million packages, the largest software <br />
                registry in the world. Our other tools and services take the Registry, and <br />
                the work you do around it, to the next level.
            </div>
        </DivMain>
    )
}
