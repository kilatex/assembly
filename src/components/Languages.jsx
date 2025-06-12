import React from 'react'
import { languagesList } from '../assets/languages'

export const Languages = ({ incorrectGuesses }) => {
    return (
        <div className='languages--container'>
            <ul>
                {languagesList.map((language, idx) => (

                    <li
                        key={language.id}
                        className={idx < incorrectGuesses ? "language--killed" : ""}
                        style={{
                            color: language.color,
                            background: language.background,
                            opacity: idx < incorrectGuesses ? 0.3 : 1,
                            textDecoration: idx < incorrectGuesses ? 'line-through' : 'none',
                            filter: idx < incorrectGuesses ? 'grayscale(1)' : 'none'
                        }}
                    >
                        {language.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}