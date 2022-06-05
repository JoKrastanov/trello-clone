import React, { useState } from 'react'
import '../stylesheets/TrelloCard.css'

import editIcon from '../images/edit-icon.svg'
import CardSettingsPopup from './CardSettingsPopup'

function TrelloCard(props) {

  const [cardSettings, setCardSettings] = useState(false)


  const toggleCardSettings = () => {
    setCardSettings(!cardSettings)
  }

  return (
    <>
        <div className='trello-card'>
        <p className='trello-card-name' onClick={toggleCardSettings}>{props.card}</p>
        <img className='card-edit-button' src={editIcon} alt="Edit"/>
      </div>
    </>

  )
  }

export default TrelloCard