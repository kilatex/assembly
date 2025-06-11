import React from 'react'
const keys = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M']
]

export const Keyboard = ({ onKeyPress }) => (
  <div className="keyboard--container">
    {keys.map((row, i) => (
      <div className="keyboard--row" key={i}>
        {row.map(key => (
          <button
            className="keyboard--key"
            key={key}
            onClick={() => onKeyPress && onKeyPress(key)}
            type="button"
          >
            {key}
          </button>
        ))}
      </div>
    ))}
  </div>
)