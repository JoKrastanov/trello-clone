import React, { useState, useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import "../stylesheets/TrelloList.css"

import CreateCard from './CreateCard'
import TrelloCard from './TrelloCard'

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  // styles we need to apply on draggables
  ...draggableStyle
});

function TrelloList(props) {

  const [cards, setCards] = useState(props.list.cards)
  const [listName, setListName] = useState(props.list.name)

  const addCard = (name) => {
    setCards(cards.concat(name))
  }

  const handleNameChange = (e) => {
    setListName(e.target.value)
  }

  return (
        <div className='trello-list'>
          <input className='list-title' type={"text"} value={listName} onChange={handleNameChange} />
          <div className='list-card-container'>
            {cards.map(card => (
              <TrelloCard key={card} card={card} />
            ))}
          </div>
          <CreateCard addCard={addCard}/>
        </div>
  )
}


export default TrelloList