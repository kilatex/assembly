import React, { useState } from 'react';
import { Alert } from './Alert';
import { Languages } from './Languages';
import { Keyboard } from './Keyboard';
import { languagesList } from '../assets/languages';
import { Header } from './Header';
import { NewGameButton } from './NewGameButton';
import { GameStatus } from './GameStatus';

export const MainContent = () => {
  const wordList = ["REACT", "JAVASCRIPT", "PYTHON", "ASSEMBLY", "NODE", "LINUX"];
  const getRandomWord = () => wordList[Math.floor(Math.random() * wordList.length)];
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState(() => getRandomWord().toUpperCase());

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
  const hasLost = incorrectGuesses > 7;

  const lastGuess = guessedLetters[guessedLetters.length - 1];
  const isCorrectLastPressed = lastGuess ? currentWord.includes(lastGuess) : true;

  const newGame = () => {
    setGuessedLetters([]);
    setCurrentWord(getRandomWord());
  };

  return (
    <>
      <GameStatus hasWon={hasWon} hasLost={hasLost} />
      <Header />
      <Alert
        hasWon={hasWon}
        hasLost={hasLost}
        isCorrectLastPressed={isCorrectLastPressed}
        killedLanguageName={killedLanguageName}
      />
      <Languages incorrectGuesses={incorrectGuesses} />
      <Keyboard
        hasWon={hasWon}
        hasLost={hasLost}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        currentWord={currentWord}
      />
      <NewGameButton show={hasWon || hasLost} onClick={newGame} />
    </>
  );
};