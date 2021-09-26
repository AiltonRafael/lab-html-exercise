import React from 'react';
import { Header } from './LayoutElements';

export const LayoutComponent = ({children}) => {
    return (
    <>
        <Header />
        <main> {children} </main>
    </>
      
    )
}
