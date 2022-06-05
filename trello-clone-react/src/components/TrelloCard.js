import React, { useState } from 'react'
import '../stylesheets/TrelloCard.css'

import editIcon from '../images/edit-icon.svg'
import { renameCard } from '../services/list'
import TextareaAutosize from 'react-textarea-autosize';

function TrelloCard(props) {

  const [nameEditing, setNameEditing] = useState(false)
  const [cardName, setCardName] = useState(props.card)

  const toggleNameEditing = () => {
    setNameEditing(!nameEditing)
  }

  const submitNameEditing = () => {
    if (cardName.trim() !== "") {
      renameCard(props.listId, props.indexNr, cardName)
    }
    toggleNameEditing()
  }

  const handleNameChange = async (e) => {
    setCardName(e.target.value)
    renameCard(props.listId, props.indexNr, e.target.value)
  }
  if (!nameEditing) {
    return (
      <div className='trello-card'>
        <p className='trello-card-name'>{cardName}</p>
        <img className='card-edit-button' src={editIcon} alt="Edit" onClick={toggleNameEditing} />
      </div>
    )
  } else {
    return (
      <>
        <div className='trello-card'>
          <TextareaAutosize className='trello-card-name' autoFocus value={cardName} onChange={handleNameChange} onBlur={submitNameEditing} />
          <img className='card-edit-button' src={editIcon} alt="Edit" onClick={toggleNameEditing} onBlur={toggleNameEditing} />
        </div>
      </>
    )
  }
}

export default TrelloCard