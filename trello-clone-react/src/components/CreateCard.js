import React, { useState } from 'react'
import "../stylesheets/CreateCard.css"

import TextareaAutosize from 'react-textarea-autosize';
import plusIcon from "../images/plus-icon.svg"

function CreateCard(props) {

  const [creatingCard, setCreatingCard] = useState(false)
  const [cardName, setCardName] = useState("")

  const toggleCreateCard = () => {
    setCreatingCard(!creatingCard)
  } 

  const handleNameChange = (e) => {
    setCardName(e.target.value);
  }

  const submitCard = () => {
    if(cardName.trim() !== "") {
      props.addCard(cardName)
      setCardName("")
    }
    toggleCreateCard()
  }

  if(!creatingCard) {
  return (
    <div className='create-card' onClick={toggleCreateCard}>
        <img className='card-plus-icon' src={plusIcon} alt=''/>
        <p>Add a card</p>
    </div>
  )
  }
  else {
    return (
      <div>
        <TextareaAutosize className='create-card-name' type={"text"} placeholder='Enter a title for this card...' autoFocus onChange={handleNameChange} onBlur={submitCard}/>
        <div className='create-card-controls'>
          <button className='primary-button' onClick={submitCard}>Add card</button>
          <button className='cancel-button' onClick={toggleCreateCard}>X</button>
        </div>
      </div>
    )
  }
}

export default CreateCard