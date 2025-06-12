import React, { useEffect, useState } from 'react'
import { Alert } from './Alert'
import { Languages } from './Languages'
import { Keyboard } from './Keyboard'
import { languagesList } from '../assets/languages';
export const MainContent = () => {
    const wordList = ["REACT", "JAVASCRIPT", "PYTHON", "ASSEMBLY", "NODE", "LINUX"];
    const getRandomWord = () => wordList[Math.floor(Math.random() * wordList.length)];
    // In MainContent.jsx
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [currentWord, setCurrentWord] = useState(getRandomWord().toUpperCase());
    const [lastPressed,setLastPressed] = useState(currentWord);
    // Calculate incorrect guesses here
    const incorrectGuesses = guessedLetters.filter(
        letter => !currentWord.includes(letter)
    ).length;
    const killedLanguageName =
    incorrectGuesses > 0 && incorrectGuesses <= languagesList.length
    ? languagesList[incorrectGuesses - 1].name
    : null;
    const hasWon = [...new Set(currentWord.toUpperCase())].every(
    letter => guessedLetters.includes(letter)
    );
    const hasLost = incorrectGuesses > 7  ? true : false;

    const isCorrectLastPressed = currentWord.includes(lastPressed);
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
            <Alert 
            hasWon={hasWon} 
            hasLost={hasLost} 
            isCorrectLastPressed={isCorrectLastPressed}
            killedLanguageName={killedLanguageName}

            />
            <Languages incorrectGuesses={incorrectGuesses} />
            <Keyboard
                hasWon= {hasWon}
                hasLost = {hasLost}
                guessedLetters={guessedLetters}
                setGuessedLetters={setGuessedLetters}
                currentWord={currentWord}
                setLastPressed= {setLastPressed}
            />
            {buttonNewGame()}
        </>
    )
  
}
