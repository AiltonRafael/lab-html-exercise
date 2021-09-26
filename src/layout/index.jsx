import React from 'react';
import { Header } from './LayoutElements';

export const LayoutComponent = ({children}) => {
    return (
    <div>
        <Header />
        <main> {children} </main>
    </div>
    )
}
