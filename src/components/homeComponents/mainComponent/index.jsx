import React from 'react'
import { PlansButton, Div, JoinButton, DivButton } from './MainElement';

export const MainComponent = () => {
    return (
        <Div>
        <h1> 
            Build amazing things
        </h1>

        <div>
            We're npm, Inc., the company behind Node package manager, the npm <br /> 
            Registry, and npm CLI. We offer those to the community for free, but our <br /> 
            day job is building and selling useful tools for developers like you.
        </div>

        <h2> 
            Take your JavaScript <br /> 
            development up a notch
        </h2>

        <div> 
        Get started today for free, or step up to npm Pro to enjoy a premium <br />
        JavaScript development experience, with features like private packages.
        </div>

        <DivButton>
            <PlansButton> See Plans </PlansButton>
            <JoinButton> Join for free </JoinButton>
        </DivButton>

    </Div>
    )
}
