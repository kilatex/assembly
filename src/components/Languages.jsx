import React from 'react'
import { languagesList } from '../assets/languages'

export const Languages = ({ incorrectGuesses }) => {
    return (
        <div className='languages--container'>
            <ul>
                {languagesList.map((language, idx) => (
                    
                    <li
                        key={language.id}
                        style={{
                            color: language.color,
                            background: language.background,
                            opacity: idx < incorrectGuesses ? 0.3 : 1, // faded if "killed"
                            textDecoration: idx < incorrectGuesses ? 'line-through' : 'none', // optional: strike-through
                            filter: idx < incorrectGuesses ? 'grayscale(1)' : 'none' // optional: grayscale effect
                        }}
                    >
                        {language.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}