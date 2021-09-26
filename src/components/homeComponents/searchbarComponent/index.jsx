import React from 'react';
import { DivSearchBar, Img, Input, ButtonSearch, DivButtonSearch, ButtonSignUp, ButtonSignIn } from './searchbarElement';
import npmLogo from '../../../assets/images/npm-logo.png'

export const SeachbarComponent = () => {
    return (
        <DivSearchBar>
            <Img src={npmLogo} />
            <DivButtonSearch>
                <Input type='text' placeholder='Search packages'/>
                <ButtonSearch> Search </ButtonSearch>
            </DivButtonSearch>
            <ButtonSignUp onClick=''> Sign Up </ButtonSignUp>
            <ButtonSignIn> Sign In </ButtonSignIn>
        </DivSearchBar>
    )
}
