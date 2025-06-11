import React from 'react'
import { Alert } from './Alert'
import { Languages } from './Languages'
import { Keyboard } from './Keyboard'

export const MainContent = () => {
    return (
        <>
            <header className='header--game'>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world safe
                    from Assembly!
                </p>
            </header>

            <Alert/>
            <Languages/>
            <Keyboard/>





        </>
    )
}
