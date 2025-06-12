import React, { useEffect, useState } from 'react'
const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]
const flatKeys = keys.flat()
const keysPressed = [];

export const Keyboard = ({setLastPressed,hasWon, hasLost, onKeyPress, guessedLetters, setGuessedLetters, currentWord }) => {


    const handleKeyClick = (key) => {
        if (hasWon || hasLost) return; // Prevent further guesses
        setLastPressed(key);
        setGuessedLetters(prevLetters =>
            prevLetters.includes(key)
                ? prevLetters 
                : [...prevLetters, key]
        );
        if (onKeyPress) onKeyPress(key);
    };



  const renderCurrentWord = () => {
    return currentWord.split("").map((letter, idx) => (
        <span key={idx}>
            {guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : "_"}
        </span>
    ));
}
    // Listen for physical keyboard presses
 
    useEffect(() => {
        if (hasWon || hasLost) return; // Prevent further guesses
        const handleKeyDown = (e) => {
            const key = e.key.toUpperCase()
            if (flatKeys.includes(key)) {
                handleKeyClick(key)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [hasWon, hasLost])

    return (
        <>
            <div className='word--display'>
                <h2>{renderCurrentWord()}</h2>
            </div>
            <div className="keyboard--container">
                {keys.map((row, i) => (
                    <div className="keyboard--row" key={i}>
                       {row.map(key => {
                        let keyClass = 'keyboard--key';
                        if(guessedLetters.includes(key)){
                            keyClass += currentWord.includes(key)
                            ? ' key--correct'
                            : ' key--wrong';
                        } 
                        return (
                            <button
                            className={keyClass}
                            key={key}
                            onClick={() => handleKeyClick(key)}
                            type='button'
                            >{key}</button>
                        )

                       })}
                    </div>
                ))}
            </div>
        </>
    )
}