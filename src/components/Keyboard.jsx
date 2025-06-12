import React, { useEffect, useState } from 'react'
const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]
const flatKeys = keys.flat()
const keysPressed = [];

export const Keyboard = ({ onKeyPress }) => {
    const [currentWord, setCurrentWord] = useState('REACT')
    const [guessedLetters, setGuessedLetters] = useState([]);

    const handleKeyClick = (key) => {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(key)
                ? prevLetters
                : [...prevLetters, key]
        );
        if (onKeyPress) onKeyPress(key);
    };



    const renderCurrentWord = () => {
        const wordToRender = currentWord.split("")
        return wordToRender.map((letter, idx) => (
            <span key={idx}>{letter.toUpperCase()}</span>
        ));
    }
    // Listen for physical keyboard presses
    useEffect(() => {
        console.log('Guessed letters:', guessedLetters);
    }, [guessedLetters]);
    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key.toUpperCase()
            if (flatKeys.includes(key)) {
                handleKeyClick(key)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

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