import React, { useEffect, useState } from 'react'
const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]
const flatKeys = keys.flat()

export const Keyboard = ({ onKeyPress }) => {
    const [currentWord,setCurrentWord] = useState('RESssACT')
    const handleKeyClick = (key) => {
        console.log(key)
        if (onKeyPress) onKeyPress(key)
    }

  const renderCurrentWord = () => {
    const wordToRender = currentWord.split("")
    return wordToRender.map((letter, idx) => (
        <span key={idx}>{letter.toUpperCase()}</span>
    ));
}
    // Listen for physical keyboard presses
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
                        {row.map(key => (
                            <button
                                className="keyboard--key"
                                key={key}
                                onClick={() => handleKeyClick(key)}
                                type="button"
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </>

    )
}