import React from 'react';

export const NewGameButton = ({ show, onClick }) => (
  show ? <button onClick={onClick} className='new--game--button'>New Game</button> : null
);