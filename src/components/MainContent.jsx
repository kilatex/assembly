import React, { useEffect, useState } from 'react'
import { Alert } from './Alert'
import { Languages } from './Languages'
import { Keyboard } from './Keyboard'

export const MainContent = () => {
    const wordList = ["REACT", "JAVASCRIPT", "PYTHON", "ASSEMBLY", "NODE", "LINUX"];
    const getRandomWord = () => wordList[Math.floor(Math.random() * wordList.length)];
    // In MainContent.jsx
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [currentWord, setCurrentWord] = useState(getRandomWord().toUpperCase());

    // Calculate incorrect guesses here
    const incorrectGuesses = guessedLetters.filter(
        letter => !currentWord.includes(letter)
    ).length;
   
    const hasWon = [...new Set(currentWord.toUpperCase())].every(
    letter => guessedLetters.includes(letter)
    );

    const hasLost = incorrectGuesses > 8  ? true : false;

    const newGame = () => {
        setGuessedLetters([]);
        setCurrentWord(getRandomWord());
    }


    const buttonNewGame = () => {
        if(hasLost || hasWon){
            return (
                            <button onClick={newGame} className='new--game--button'>New Game</button>
            )
        }else{
            return ''
        }
    }

    return (
        <>
            <header className='header--game'>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world safe
                    from Assembly!
                </p>
            </header>
            <Alert hasWon={hasWon} hasLost={hasLost} />
            <Languages incorrectGuesses={incorrectGuesses} />
            <Keyboard
                hasWon= {hasWon}
                hasLost = {hasLost}
                guessedLetters={guessedLetters}
                setGuessedLetters={setGuessedLetters}
                currentWord={currentWord}
            />

            {buttonNewGame()}



        </>
    )
  
}
