import React from 'react';
import { NavbarComponents } from '../../components/homeComponents/navbarComponent';
import { SeachbarComponent } from '../../components/homeComponents/searchbarComponent';
import { MainComponent } from '../../components/homeComponents/mainComponent';
import { SectionComponent } from '../../components/homeComponents/sectionComponent';
import { IconComponent } from '../../components/homeComponents/iconComponent';

export const HomeComponent = () => {
    return (
    <>
        <NavbarComponents />
        <SeachbarComponent />
        <MainComponent />
        <SectionComponent />
        <IconComponent />
    </>

    )
}
