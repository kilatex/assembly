import React from 'react'
import {getFarewellText} from '../assets/utils'
export const Alert = ({killedLanguageName, hasWon, hasLost,isCorrectLastPressed }) => {

  const showMessage = (alertInfo) => {
    return(
    <div className={alertInfo.class}>
      <p>{alertInfo.message1}</p>
      <p>{alertInfo.message2}</p>
    </div>
    )
  }



  if (hasLost) {
    const lostALert = {
      class: 'alert--game alert--lost',
      message1 : 'You Loose!',
      message2 : `Better start learning Assembly 😢 ` 
    }
    return showMessage(lostALert)

  } else if (hasWon) {
     const wonAlert = {
      class: 'alert--game alert--win',
      message1 : 'You Win!',
      message2 : `Well Done \u{1F389}`
    }
    return showMessage(wonAlert);
  }else if(isCorrectLastPressed == false){
     const killedAlert = {
      class: 'alert--game alert--killed',
      message1 : getFarewellText(killedLanguageName),
      message2 : '' 
    }
    return showMessage(killedAlert)
  }




}
