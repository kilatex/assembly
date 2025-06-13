import React from 'react';
import Confetti from 'react-confetti';
import { AntiConfetti } from './AntiConfetti';

export const GameStatus = ({ hasWon, hasLost }) => (
  <>
    {hasWon && <Confetti />}
    {hasLost && <AntiConfetti />}
  </>
);