import React from 'react';
import { Router } from '@reach/router';
import { HomeComponent } from './views/home';
import { SingUpComponent } from './singUp';
import { LayoutComponent } from './layout';

export const Routers = () => {
    return (
        <LayoutComponent>
            <Router>
                <HomeComponent path='/*'/>
                <SingUpComponent path='/singup' />
            </Router>
        </LayoutComponent>
    )
}
