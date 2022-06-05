import React, { useState } from 'react'
import "../stylesheets/CreateList.css"

import plusIconWhite from "../images/plus-icon-white.svg"
 
function CreateList(props) {

  const [creatingList, setCreatingList] = useState()
  const [listName, setListName] = useState("")

  const toggleCreateList = () => {
    setCreatingList(!creatingList)
  } 

  const handleNameChange = (e) => {
    setListName(e.target.value);
  }

  const submitList = () => {
    if(listName.trim() !== "") {
      props.addList(listName)
      setListName("")
    }
    toggleCreateList()
  }

  if(!creatingList) {
  return (
    <div className='create-list' onClick={toggleCreateList}>
        <img className='list-plus-icon' src={plusIconWhite} alt=''/>
        <p>Add another list</p>
    </div>
  )
  }
  else {
    return (
      <div className='create-list-form'>
      <input typeOf={'text'} className='create-list-name' placeholder='Enter list title...' autoFocus onChange={handleNameChange}/>
      <div className='create-list-controls'>
        <button className='primary-button' onClick={submitList}>Add List</button>
        <button className='cancel-button' onClick={toggleCreateList}>X</button>
      </div>
    </div>
    )
  }
}

export default CreateList