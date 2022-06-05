import React, { useState } from 'react'
import { createCard, renameList } from '../services/list'
import "../stylesheets/TrelloList.css"

import CreateCard from './CreateCard'
import TrelloCard from './TrelloCard'

function TrelloList(props) {

  const [cards, setCards] = useState(props.list.cards)
  const [listName, setListName] = useState(props.list.name)

  const addCard = (name) => {
    setCards(cards.concat(name))
    createCard(props.list._id, name)
  }

  const handleNameChange = async (e) => {
    setListName(e.target.value)
    renameList(props.list._id, e.target.value)
  }

  return (
        <div className='trello-list'>
          <input className='list-title' type={"text"} value={listName} onChange={handleNameChange} />
          <div className='list-card-container'>
            {cards.map((card, index) => (
              <TrelloCard key={index} card={card} listId={props.list._id} indexNr={index}/>
            ))}
          </div>
          <CreateCard addCard={addCard} />
        </div>
  )
}


export default TrelloList